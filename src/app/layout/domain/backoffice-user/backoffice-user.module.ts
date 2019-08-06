import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeUserListComponent } from './backoffice-user-list/backoffice-user-list.component';
import { BackofficeUserRoutingModule } from "./backoffice-user-routing.module";
import {
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule
} from "@angular/material";

@NgModule({
    declarations: [BackofficeUserListComponent],
    imports: [
        CommonModule,
        BackofficeUserRoutingModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule
    ]
})
export class BackofficeUserModule { }
