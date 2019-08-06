import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {BackofficeUserService} from "../../../../core/services/data/backofficeUser/backoffice-user.service";
import {BackofficeUser} from "../../../../model/backofficeUser";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-backoffice-user-list',
    templateUrl: './backoffice-user-list.component.html',
    styleUrls: ['./backoffice-user-list.component.scss']
})
export class BackofficeUserListComponent implements AfterViewInit {
    data: BackofficeUser[];
    displayedColumns: string[] = [
        'username',
        'enabled',
        'email',
        'firstName',
        'lastName',
        'accountExpired',
        'accountLocked',
        'passwordExpired'
    ];

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: false}) sort: MatSort;

    constructor(
        public service: BackofficeUserService
    ) { }

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
                    // Catch if the GitHub API has reached its rate limit. Return empty data.
                    this.isRateLimitReached = true;
                    return observableOf([]);
                })
            ).subscribe(result => {
                this.data = result;
            });
    }

}
