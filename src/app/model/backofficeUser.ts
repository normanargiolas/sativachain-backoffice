import {BackofficeRole} from './backofficeRole';

export interface BackofficeUser {
    id: number;
    username: string;
    password: string;
    enabled: boolean;
    email: string;
    firstName: string;
    lastName: string;
    accountExpired: boolean;
    accountLocked: boolean;
    passwordExpired: boolean;
    authorities: BackofficeRole[];
}
