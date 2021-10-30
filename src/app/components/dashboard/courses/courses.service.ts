import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ICourse {
  courseName: string;
  description: string;
  endDate: Date;
  firstName: string;
  id: number;
  lastName: string;
  roles: string[];
  startDate: Date;
  teacherId: number;
  hover?: boolean;
}

export interface IError {
  timestamp: string;
  error: string;
  message: string;
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  public Error: IError;
  public courses: ICourse[];
  public header = new HttpHeaders({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvcnplbmhhaW1AZ21haWwuY29tIiwicm9sZSI6WyJST0xFX1RFQUNIRVIiXSwiaWQiOjQyLCJhdXRoZW50aWNhdGVkIjp0cnVlLCJpYXQiOjE2MzU1ODQ4MTYsImV4cCI6MTYzNTY3MTIxNn0.wcOr0BEQezhL6NFVV2gjKNRxtOXdjVGbwPRNx3AJTGg',
  });
  public options = {
    headers: this.header,
  };

  constructor(private http: HttpClient) {}

  public create(course: ICourse): Observable<ICourse> {
    return this.http.post<ICourse>(
      'https://courseevaluator-main.herokuapp.com/api/v1/courses/',
      course,
      this.options
    );
  }

  public getAll(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(
      'https://courseevaluator-main.herokuapp.com/api/v1/courses/',
      this.options
    );
  }

  public getAvailable(): Observable<ICourse[]> {
    this.courses = [];
    return this.http.get<ICourse[]>(
      'https://courseevaluator-main.herokuapp.com/api/v1/courses/available/',
      this.options
    );
  }

  public update(course: ICourse): Observable<ICourse> {
    return this.http.put<ICourse>(
      `https://courseevaluator-main.herokuapp.com/api/v1/courses/${course.id}`,
      course,
      this.options
    );
  }

  public delete(id: number): Observable<ICourse> {
    return this.http.delete<ICourse>(
      `https://courseevaluator-main.herokuapp.com/api/v1/courses/${id}`,
      this.options
    );
  }
}
