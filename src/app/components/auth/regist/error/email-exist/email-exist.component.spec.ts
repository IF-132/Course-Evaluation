import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailExistComponent } from './email-exist.component';

describe('EmailExistComponent', () => {
  let component: EmailExistComponent;
  let fixture: ComponentFixture<EmailExistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailExistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
