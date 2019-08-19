import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BackofficeUserService} from '../../../../core/services/data/backofficeUser/backoffice-user.service';
import {BackofficeUser} from '../../../../model/backofficeUser';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ConfirmDialogComponent} from '../../../components/confirm-dialog/confirm-dialog.component';
import {MatDialog, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-backoffice-user-list',
    templateUrl: './backoffice-user-list.component.html',
    styleUrls: ['./backoffice-user-list.component.scss']
})
export class BackofficeUserListComponent implements AfterViewInit {
    data: MatTableDataSource<BackofficeUser>;
    displayedColumns: string[] = [
        'id',
        'username',
        'enabled',
        'email',
        'firstName',
        'lastName',
        'accountExpired',
        'accountLocked',
        'actions'
    ];
    dataColumns: string[] = [
        'id',
        'username',
        'password',
        'enabled',
        'email',
        'firstName',
        'lastName',
        'accountExpired',
        'accountLocked',
        'passwordExpired',
    ];

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: false}) sort: MatSort;

    constructor(
        public service: BackofficeUserService,
        public router: Router,
        public dialog: MatDialog
    ) {
    }

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    return this.service.findAll();
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
                this.data = new MatTableDataSource<BackofficeUser>(result);
        });
    }

    delete(id: number) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '350px',
            data: 'Do you confirm the deletion of this data?'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {

                this.service.delete(id).subscribe(res => {
                    this.ngAfterViewInit();
                    this.router.navigateByUrl('/users');

                });
            }
        });

    }
}
