import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyFormComponent } from './company-form/company-form.component';
import {CompanyRoutingModule} from './company-routing.module';

@NgModule({
    declarations: [CompanyFormComponent],
    imports: [
        CommonModule,
        CompanyRoutingModule
    ]
})
export class CompanyModule { }
