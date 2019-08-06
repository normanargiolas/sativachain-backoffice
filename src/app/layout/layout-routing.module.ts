import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {Role} from '../model/role';
import {AuthGuard} from '../shared/guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            // tslint:disable-next-line:max-line-length
            { path: 'users', loadChildren: () => import('./domain/backoffice-user/backoffice-user.module').then(m => m.BackofficeUserModule),
                canActivate: [AuthGuard],
                data: { roles: [Role.Admin] }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
