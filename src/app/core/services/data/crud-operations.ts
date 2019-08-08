import {Observable} from "rxjs";
import {Page} from "../../../model/page";


export interface CrudOperations<T, ID> {
    save(t: T): Observable<T>;
    update(id: ID, t: T): Observable<T>;
    findOne(id: ID): Observable<T>;
    findBy(params: any): Observable<T[]>;
    findAll(): Observable<T[]>;
    getPage(max: number, sort: string, order: string, pageIndex: number): Observable<Page<T>>;
    delete(id: ID): Observable<any>;
}
