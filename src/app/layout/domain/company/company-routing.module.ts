import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyFormComponent} from './company-form/company-form.component';

const routes: Routes = [
    { path: '', component: CompanyFormComponent, data : {state : 'check'} },
    { path: 'create', component: CompanyFormComponent, data : {state : 'create'}},
    { path: 'edit', component: CompanyFormComponent, data : {state : 'edit'}},
    { path: 'show', component: CompanyFormComponent, data : {state : 'show'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule {}
