import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";

describe('AuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                TranslateModule.forRoot()
            ],
            providers: [AuthGuard]
        });
    });

    it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
        expect(guard).toBeTruthy();
    }));
});
