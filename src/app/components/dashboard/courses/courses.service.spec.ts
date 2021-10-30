import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CoursesService, ICourse } from './courses.service';

describe('CoursesService config', () => {
  let service: CoursesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [service],
    });
    service = TestBed.inject(CoursesService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
  // describe('CourseService getAll', () => {
  //   let expectedCourses: ICourse[];
  //   beforeEach(() => {
  //     expectedCourses = [
  //       {
  //         id: 2,
  //         courseName: 'Python',
  //         description: 'unit test',
  //         startDate: '2021-11-11',
  //         endDate: '2021-12-12',
  //         teacherId: 8,
  //         firstName: 'Yurii',
  //         lastName: 'Testinberg',
  //         roles: ['ROLE_TEACHER'],
  //       },
  //     ];
  //   });

  //   it('should return expected courses from getAll', () => {
  //     service
  //       .getAll()
  //       .subscribe((courses) => expect(courses).toEqual(expectedCourses), fail);

  //     const req = httpTestingController.expectOne(
  //       'https://courseevaluator-main.herokuapp.com/api/v1/courses/'
  //     );
  //     expect(req.request.method).toEqual('GET');

  //     req.flush(expectedCourses); //Return expectedEmps
  //   });
  // });
});
