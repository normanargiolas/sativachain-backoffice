import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BackofficeUser} from '../../../../model/backofficeUser';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/services/storage/storage.service';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {ConfirmDialogComponent} from '../../../components/confirm-dialog/confirm-dialog.component';
import {Seed} from '../../../../model/seed';
import {SeedService} from '../../../../core/services/data/seed/seed.service';

@Component({
  selector: 'app-seed-list',
  templateUrl: './seed-list.component.html',
  styleUrls: ['./seed-list.component.scss']
})
export class SeedListComponent implements AfterViewInit {
    data: MatTableDataSource<Seed>;
    user: BackofficeUser;
    displayedColumns: string[] = [
        'id',
        // 'owner',
        'productCode',
        'lotCode',
        'species',
        'variety',
        // 'country',
        // 'date',
        'actions'
    ];
    dataColumns: string[] = [
        'id',
        'owner',
        'productCode',
        'lotCode',
        'species',
        'variety',
        'country',
        'date',
        'authorization'
    ];

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: false}) sort: MatSort;

    constructor(
        public service: SeedService,
        public router: Router,
        public dialog: MatDialog,
        private translate: TranslateService,
        private storage: StorageService
    ) {
    }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.user = this.storage.getUser();

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    return this.service.findBy({'owner': this.user.id});
                }),
                map(data => {
                    // Flip flag to show that loading has finished.
                    this.isLoadingResults = false;
                    this.isRateLimitReached = false;
                    this.resultsLength = data.length;
                    return data;
                }),
                catchError(() => {
                    this.isLoadingResults = false;
                    this.isRateLimitReached = true;
                    return observableOf([]);
                })
            ).subscribe(result => {
            this.data = new MatTableDataSource<Seed>(result);
        });
    }

    delete(id: number) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '350px',
            data: this.translate.instant('DefaultDeleteMessage')
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {

                this.service.delete(id).subscribe(res => {
                    this.ngAfterViewInit();
                    this.router.navigateByUrl('/seed');

                });
            }
        });

    }
}
