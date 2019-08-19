import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LanguageTranslationModule} from './shared/modules/language-translation/language-translation.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './shared';
import {LoginModule} from './login/login.module';
import {AuthService} from './core/services/auth.service';
import {DataListComponent} from './core/components/data-list/data-list.component';
import {HasRolesDirective} from './shared/shared-directives/directives/has-roles.directive';
import {BackofficeUserService} from './core/services/data/backofficeUser/backoffice-user.service';
import {StorageService} from './core/services/storage/storage.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        LoginModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, DataListComponent],
    providers: [AuthGuard, BackofficeUserService, AuthService, HasRolesDirective, StorageService],
    bootstrap: [AppComponent]
})
export class AppModule {}
