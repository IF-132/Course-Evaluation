import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidConfirmCodeComponent } from './invalid-confirm-code.component';

describe('InvalidConfirmCodeComponent', () => {
  let component: InvalidConfirmCodeComponent;
  let fixture: ComponentFixture<InvalidConfirmCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidConfirmCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidConfirmCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
