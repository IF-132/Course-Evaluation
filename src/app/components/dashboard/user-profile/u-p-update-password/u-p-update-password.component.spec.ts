import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPUpdatePasswordComponent } from './u-p-update-password.component';

describe('UPUpdatePasswordComponent', () => {
  let component: UPUpdatePasswordComponent;
  let fixture: ComponentFixture<UPUpdatePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UPUpdatePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UPUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
