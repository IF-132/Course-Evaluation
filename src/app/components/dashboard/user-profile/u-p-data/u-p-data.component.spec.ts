import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPDataComponent } from './u-p-data.component';

describe('UPDataComponent', () => {
  let component: UPDataComponent;
  let fixture: ComponentFixture<UPDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UPDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UPDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
