import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BackofficeUserListComponent} from './backoffice-user-list/backoffice-user-list.component';
import {BackofficeUserFormComponent} from './backoffice-user-form/backoffice-user-form.component';

const routes: Routes = [
    { path: '', component: BackofficeUserListComponent },
    { path: 'create', component: BackofficeUserFormComponent, data : {state : 'create'}},
    { path: 'edit', component: BackofficeUserFormComponent, data : {state : 'edit'}},
    { path: 'show', component: BackofficeUserFormComponent, data : {state : 'show'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BackofficeUserRoutingModule {}
