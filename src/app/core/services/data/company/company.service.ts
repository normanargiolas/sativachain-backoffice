import {Injectable} from '@angular/core';
import {CrudService} from '../crud.service';
import {Company} from '../../../../model/company';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth.service';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends CrudService<Company, number> {

    constructor(
        protected _http: HttpClient,
        protected _auth: AuthService
    ) {
        super(_http, `${environment.apiBaseUrl}/company`, _auth);
    }
}
