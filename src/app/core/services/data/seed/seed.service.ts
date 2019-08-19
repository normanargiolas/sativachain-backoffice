import {Injectable} from '@angular/core';
import {CrudService} from '../crud.service';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth.service';
import {environment} from '../../../../../environments/environment';
import {Seed} from '../../../../model/seed';

@Injectable({
  providedIn: 'root'
})
export class SeedService extends CrudService<Seed, number> {

    constructor(
        protected _http: HttpClient,
        protected _auth: AuthService
    ) {
        super(_http, `${environment.apiBaseUrl}/seed`, _auth);
    }
}
