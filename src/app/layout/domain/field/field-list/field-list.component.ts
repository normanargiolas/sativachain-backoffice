import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {ConfirmDialogComponent} from '../../../components/confirm-dialog/confirm-dialog.component';
import {Field} from '../../../../model/field';
import {FieldService} from '../../../../core/services/data/field/field.service';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements AfterViewInit {
    data: MatTableDataSource<Field>;
    displayedColumns: string[] = [
        'id',
        'owner',
        'size',
        'lat',
        'lon',
        'address',
        'company',
        'cadastralData',
        'actions'
    ];
    dataColumns: string[] = [
        'id',
        'owner',
        'size',
        'lat',
        'lon',
        'address',
        'company',
        'cadastralData',
        'authorization'
    ];

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
@ViewChild(MatSort, {static: false}) sort: MatSort;

    constructor(
        public service: FieldService,
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
            this.data = new MatTableDataSource<Field>(result);
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
                    this.router.navigateByUrl('/field');

                });
            }
        });

    }
}
