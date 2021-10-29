import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './models';

@Injectable({
  providedIn: 'root'
})
export class AvailableCoursesService {

  constructor(private http: HttpClient) {
  }

  getAvilableCourses() {
    return this.http.get<Course[]>('https://courseevaluator-main.herokuapp.com/api/v1/courses/', {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZXJ2ZS1jb3Vyc2VAcmFtYmxlci5ydSIsInJvbGUiOltdLCJpZCI6OSwiYXV0aGVudGljYXRlZCI6dHJ1ZSwiaWF0IjoxNjM1NDkxODEyLCJleHAiOjE2MzU1NzgyMTJ9.3RTCN1wuf5Ho_F1biF2rnFUxVQNNYg6aXLkijj5Ve5Y'
      }
    })
  }
}
