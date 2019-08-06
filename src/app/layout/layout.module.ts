import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeaderComponent} from './components/header/header.component';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        MatDialogModule,
        MatButtonModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, ConfirmDialogComponent],
    entryComponents: [
        ConfirmDialogComponent
    ]
})
export class LayoutModule {}
