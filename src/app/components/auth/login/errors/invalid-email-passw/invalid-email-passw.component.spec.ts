import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidEmailPasswComponent } from './invalid-email-passw.component';

describe('InvalidEmailPasswComponent', () => {
  let component: InvalidEmailPasswComponent;
  let fixture: ComponentFixture<InvalidEmailPasswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidEmailPasswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidEmailPasswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
