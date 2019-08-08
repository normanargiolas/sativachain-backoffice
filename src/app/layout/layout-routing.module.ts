import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
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
            },
            { path: 'company', loadChildren: () => import('./domain/company/company.module').then(m => m.CompanyModule),
                canActivate: [AuthGuard],
                data: { roles: [Role.Farmer, Role.Transformer, Role.Seller] }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
