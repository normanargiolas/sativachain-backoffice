import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SeedListComponent} from './seed-list/seed-list.component';
import {SeedFormComponent} from './seed-form/seed-form.component';

const routes: Routes = [
    { path: '', component: SeedListComponent, data : {state : 'check'} },
    { path: 'create', component: SeedFormComponent, data : {state : 'create'}},
    { path: 'edit', component: SeedFormComponent, data : {state : 'edit'}},
    { path: 'show', component: SeedFormComponent, data : {state : 'show'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SeedRoutingModule {}
