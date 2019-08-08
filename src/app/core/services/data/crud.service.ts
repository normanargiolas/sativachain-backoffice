import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CrudOperations} from './crud-operations';
import {AuthService} from '../auth.service';
import {Page} from '../../../model/page';

export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {

    constructor(
        protected _http: HttpClient,
        protected _base: string,
        protected _auth: AuthService
    ) {}

    getHeaders() {
        const token = this._auth.getToken();
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
    }

    getHttpOptions() {
        const token = this._auth.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }
        return httpOptions;
    }

    save(t: T): Observable<T> {
        return this._http.post<T>(this._base, t, this.getHttpOptions());
    }

    update(id: ID, t: T): Observable<T> {
        return this._http.put<T>(this._base + '/' + id, t, this.getHttpOptions());
    }

    findOne(id: ID): Observable<T> {
        return this._http.get<T>(this._base + '/' + id, this.getHttpOptions());
    }

    findBy(params: any): Observable<T[]> {
        const options = this.getHttpOptions();
        options['params'] = params;
        return this._http.get<T[]>(this._base + '/', options);
    }

    findAll(): Observable<T[]> {
        return this._http.get<T[]>(this._base, this.getHttpOptions());
    }

    getPage(max: number, sort: string, order: string, pageIndex: number): Observable<Page<T>> {
        const params = new HttpParams()
            .set('max', max.toString())
            .set('sort', sort)
            .set('order', order)
            .set('offset', (pageIndex * max).toString());

        return this._http.get<Page<T>>(this._base, {
            headers: this.getHeaders(),
            params: params
        });
    }

    delete(id: ID): Observable<T> {
        return this._http.delete<T>(this._base + '/' + id, this.getHttpOptions());
    }

}
