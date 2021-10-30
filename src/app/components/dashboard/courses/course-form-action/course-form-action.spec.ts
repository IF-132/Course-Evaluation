import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormActionComponent } from './course-form-action';

describe('UpdateCourseComponent', () => {
  let component: CourseFormActionComponent;
  let fixture: ComponentFixture<CourseFormActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseFormActionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFormActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
