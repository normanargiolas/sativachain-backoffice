import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FieldListComponent} from './field-list/field-list.component';
import {FieldFormComponent} from './field-form/field-form.component';
import {FieldRoutingModule} from './field-routing.module';

@NgModule({
    declarations: [FieldListComponent, FieldFormComponent],
    imports: [
        CommonModule,
        FieldRoutingModule
    ]
})
export class FieldModule { }
