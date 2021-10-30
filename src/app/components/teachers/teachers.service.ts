import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ITeacher {
  firstName: string;
  id: number;
  lastName: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  public header: HttpHeaders = new HttpHeaders({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvcnplbmhhaW1AZ21haWwuY29tIiwicm9sZSI6WyJST0xFX1RFQUNIRVIiXSwiaWQiOjQyLCJhdXRoZW50aWNhdGVkIjp0cnVlLCJpYXQiOjE2MzU1ODQ4MTYsImV4cCI6MTYzNTY3MTIxNn0.wcOr0BEQezhL6NFVV2gjKNRxtOXdjVGbwPRNx3AJTGg',
  });
  public options = {
    headers: this.header,
  };
  constructor(private http: HttpClient) {}
  public getTeachers(): Observable<ITeacher[]> {
    return this.http.get<ITeacher[]>(
      `https://courseevaluator-main.herokuapp.com/api/v1/teachers/`,
      this.options
    );
  }
}
