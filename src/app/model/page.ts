import {Paging} from "./paging";

export interface Page<T> {
    data: T[];
    paging: Paging;
}
