import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mockCourses } from './mockCourses';

@Component({
  selector: 'app-available-courses',
  templateUrl: './available-courses.component.html',
  styleUrls: ['./available-courses.component.scss']
})
export class AvailableCoursesComponent implements OnInit {
  // availableCourses$: Observable<any>;
  availableCoursesMock: Array<any>;
  constructor(
    // public loaderService: LoaderService
  ) {
    this.availableCoursesMock = mockCourses;
  }

  ngOnInit(): void {
    console.log("Courses", mockCourses);
  }

}
