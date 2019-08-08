import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyFormComponent } from './company-form/company-form.component';
import {CompanyRoutingModule} from './company-routing.module';
import {DynamicFormsMaterialUIModule} from '@ng-dynamic-forms/ui-material';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [CompanyFormComponent],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        DynamicFormsMaterialUIModule,
        TranslateModule,
        ReactiveFormsModule
    ]
})
export class CompanyModule { }
