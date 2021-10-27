import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPUpdatePictureComponent } from './u-p-update-picture.component';

describe('UPUpdatePictureComponent', () => {
  let component: UPUpdatePictureComponent;
  let fixture: ComponentFixture<UPUpdatePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UPUpdatePictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UPUpdatePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
