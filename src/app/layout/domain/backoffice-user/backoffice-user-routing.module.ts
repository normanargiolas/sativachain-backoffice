import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BackofficeUserListComponent} from "./backoffice-user-list/backoffice-user-list.component";

const routes: Routes = [
    { path: '', component: BackofficeUserListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BackofficeUserRoutingModule {}
