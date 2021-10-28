import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mockCourses } from './mockCourses';
import { AvailableCoursesService } from './available-courses.service';
import { LoaderService } from 'src/app/share/loader/loader.service';
import { Course } from './models';

@Component({
  selector: 'app-available-courses',
  templateUrl: './available-courses.component.html',
  styleUrls: ['./available-courses.component.scss'],
})
export class AvailableCoursesComponent implements OnInit {
  availableCourses$: Observable<Array<Course>>;

  constructor(
    public loaderService: LoaderService,
    private acCoursesdService: AvailableCoursesService
  ) {
  }

  ngOnInit(): void {
    this.availableCourses$ = this.acCoursesdService.getAvilableCourses();
  }
}
