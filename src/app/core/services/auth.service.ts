import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Auth} from '../../model/auth';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {TranslateService} from '@ngx-translate/core';
import {Role} from '../../model/role';
import {StorageService} from './storage/storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    error: any;

    constructor(
        private http: HttpClient,
        private router: Router,
        private translate: TranslateService,
        private storage: StorageService
    ) {
        const i = 0;
    }

    // REAL LOGIN DO NOT DELETE THEES COMMENTS
    // login({username, password}) {
    //     const body = {
    //         username: username,
    //         password: password
    //     }
    //
    //     const loginUrl = environment.loginUrl;
    //     this.http.post<Auth>(loginUrl, body).subscribe(
    //         res => {
    //             if (res.roles.indexOf('ROLE_ADMIN') >= 0) {
    //                 sessionStorage.setItem('auth', JSON.stringify(res));
    //                 console.log('Login success: ', res);
    //                 this.router.navigateByUrl('/dashboard');
    //             } else {
    //                 this.error = this.translate.instant('Access denied');
    //                 this.logout();
    //             }
    //         },
    //         err => {
    //             this.error = err;
    //             console.error('Auth error: ', err);
    //             this.error = this.translate.instant('Invalid credentials');
    //         }
    //
    //     );
    // }

    login({username, password}) {
        const loginUrl = environment.loginUrl;
        this.http.get<Auth>(`${loginUrl}/${username}`).subscribe(
            res => {
                const uName = res.username;
                this.storage.setAuth(res);
                console.log('Login success: ', res);
                this.router.navigateByUrl('/dashboard');
            },
            err => {
                this.error = err;
                console.error('Auth error: ', err);
                this.error = this.translate.instant('Invalid credentials');
            }
        );
    }

    logout() {
        this.storage.clear();
        this.router.navigateByUrl('login');
    }

    isLogged() {
        const auth: Auth = this.getAuth();
        if (!auth) {
            return false;
        }
        return auth.access_token !== undefined;
    }

    getUsername() {
        const auth: Auth = this.getAuth();
        if (!auth) {
            return '';
        }
        return auth.username;
    }

    getToken() {
        const auth: Auth = this.getAuth();
        if (!auth) {
            return '';
        }
        return auth.access_token;
    }

    getRoles() {
        const auth: Auth = this.getAuth();
        if (!auth) {
            return '';
        }
        return auth.roles;
    }

    hasRoles(roles: Role[]) {
        const userRoles = this.getRoles();
        return roles.some(r => userRoles.indexOf(r) >= 0);
    }

    private getAuth() {
        return this.storage.getAuth();
    }
}

