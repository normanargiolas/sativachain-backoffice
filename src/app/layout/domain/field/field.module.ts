import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FieldListComponent} from './field-list/field-list.component';
import {FieldFormComponent} from './field-form/field-form.component';
import {FieldRoutingModule} from './field-routing.module';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormsMaterialUIModule} from '@ng-dynamic-forms/ui-material';
import {DynamicFormsBootstrapUIModule} from '@ng-dynamic-forms/ui-bootstrap';

@NgModule({
    declarations: [FieldListComponent, FieldFormComponent],
    imports: [
        CommonModule,
        FieldRoutingModule,
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
export class FieldModule { }
