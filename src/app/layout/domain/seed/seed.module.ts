import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SeedRoutingModule} from './seed-routing.module';
import { SeedListComponent } from './seed-list/seed-list.component';
import { SeedFormComponent } from './seed-form/seed-form.component';

@NgModule({
    declarations: [SeedListComponent, SeedFormComponent],
    imports: [
        CommonModule,
        SeedRoutingModule
    ]
})
export class SeedModule { }
