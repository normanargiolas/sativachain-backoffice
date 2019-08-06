import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeUserFormComponent } from './backoffice-user-form.component';

describe('BackofficeUserFormComponent', () => {
  let component: BackofficeUserFormComponent;
  let fixture: ComponentFixture<BackofficeUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackofficeUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
