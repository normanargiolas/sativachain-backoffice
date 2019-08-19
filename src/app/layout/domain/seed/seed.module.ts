import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SeedRoutingModule} from './seed-routing.module';
import {SeedListComponent} from './seed-list/seed-list.component';
import {SeedFormComponent} from './seed-form/seed-form.component';
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
    declarations: [SeedListComponent, SeedFormComponent],
    imports: [
        CommonModule,
        SeedRoutingModule,
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
export class SeedModule { }
