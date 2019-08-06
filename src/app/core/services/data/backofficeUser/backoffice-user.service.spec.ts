import {TestBed} from '@angular/core/testing';

import {BackofficeUserService} from './backoffice-user.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";

describe('BackofficeUserService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule, TranslateModule.forRoot()]
    }));

    it('should be created', () => {
        const service: BackofficeUserService = TestBed.get(BackofficeUserService);
        expect(service).toBeTruthy();
    });

    it('users list', () => {
        const service: BackofficeUserService = TestBed.get(BackofficeUserService);
        service.findAll().subscribe(res => {
                expect(res.length).toEqual(100)
            }
        )
    });
});
