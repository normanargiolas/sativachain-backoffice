import {Injectable} from '@angular/core';
import {CrudService} from '../crud.service';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth.service';
import {environment} from '../../../../../environments/environment';
import {Field} from '../../../../model/field';

@Injectable({
  providedIn: 'root'
})
export class FieldService extends CrudService<Field, number> {

    constructor(
        protected _http: HttpClient,
        protected _auth: AuthService
    ) {
        super(_http, `${environment.apiBaseUrl}/field`, _auth);
    }
}
