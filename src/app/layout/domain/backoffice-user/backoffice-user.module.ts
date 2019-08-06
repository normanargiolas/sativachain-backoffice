import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackofficeUserListComponent} from './backoffice-user-list/backoffice-user-list.component';
import {BackofficeUserRoutingModule} from './backoffice-user-routing.module';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import {BackofficeUserFormComponent} from './backoffice-user-form/backoffice-user-form.component';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormsMaterialUIModule} from '@ng-dynamic-forms/ui-material';
import {DynamicFormsBootstrapUIModule} from '@ng-dynamic-forms/ui-bootstrap';

@NgModule({
    declarations: [BackofficeUserListComponent, BackofficeUserFormComponent],
    imports: [
        CommonModule,
        BackofficeUserRoutingModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        TranslateModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        DynamicFormsMaterialUIModule,
        MatIconModule,
        DynamicFormsBootstrapUIModule,
        DynamicFormsBootstrapUIModule
    ]
})
export class BackofficeUserModule { }
