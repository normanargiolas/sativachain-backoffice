import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header.component';
import { LayoutModule } from '../../layout.module';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                LayoutModule,
                RouterTestingModule,
                TranslateModule.forRoot(),
                HttpClientTestingModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
