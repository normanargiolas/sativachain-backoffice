import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isLogged()) {
            if (route.data.roles) {
                if ( !this.authService.hasRoles(route.data.roles) ) {
                    // role not authorised so redirect to root
                    this.router.navigate(['/dashboard']);
                    return false;
                } else {
                    return true;
                }
            }
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
