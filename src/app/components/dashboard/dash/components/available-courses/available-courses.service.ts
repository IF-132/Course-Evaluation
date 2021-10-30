import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './models';

@Injectable({
  providedIn: 'root'
})
export class AvailableCoursesService {
  token: string | any = window.localStorage.getItem("token");

  constructor(private http: HttpClient) {
  }

  getAvilableCourses() {
    return this.http.get<Course[]>('https://courseevaluator-main.herokuapp.com/api/v1/courses/', {
      headers: {
        Authorization: this.token
      }
    });
  }
}
