import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPUpdateNameComponent } from './u-p-update-name.component';

describe('UPUpdateNameComponent', () => {
  let component: UPUpdateNameComponent;
  let fixture: ComponentFixture<UPUpdateNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UPUpdateNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UPUpdateNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
