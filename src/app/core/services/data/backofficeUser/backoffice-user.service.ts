import {Injectable} from '@angular/core';
import {CrudService} from '../crud.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {AuthService} from '../../auth.service';
import {BackofficeUser} from '../../../../model/backofficeUser';

@Injectable({
  providedIn: 'root'
})
export class BackofficeUserService extends CrudService<BackofficeUser, number> {

    constructor(
        protected _http: HttpClient,
        protected _auth: AuthService
    ) {
        super(_http, `${environment.apiBaseUrl}/backofficeUser`, _auth);
    }
}
