import { Injectable } from '@angular/core';
import {BackofficeUser} from '../../../model/backofficeUser';
import {Auth} from '../../../model/auth';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    setUser(user: BackofficeUser) {
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    getUser() {
        const user = sessionStorage.getItem('user');
        if (!user) {
            return null;
        }
        return JSON.parse(user) as BackofficeUser;
    }

    setAuth(auth: Auth) {
        sessionStorage.setItem('auth', JSON.stringify(auth));
    }

    getAuth(): Auth {
        const auth = sessionStorage.getItem('auth');
        if (!auth) {
            return null;
        }
        return JSON.parse(auth) as Auth;
    }

    clear() {
        sessionStorage.clear();
    }
}
