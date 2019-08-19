import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FieldFormComponent} from './field-form/field-form.component';
import {FieldListComponent} from './field-list/field-list.component';

const routes: Routes = [
    { path: '', component: FieldListComponent, data : {state : 'check'} },
    { path: 'create', component: FieldFormComponent, data : {state : 'create'}},
    { path: 'edit', component: FieldFormComponent, data : {state : 'edit'}},
    { path: 'show', component: FieldFormComponent, data : {state : 'show'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FieldRoutingModule {}
