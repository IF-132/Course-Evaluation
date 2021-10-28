import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeacherStatDto } from 'src/app/share/models/TeacherStatDto';
import { User } from 'src/app/share/models/User';

@Injectable({
  providedIn: 'root'
})
export class TotalInfoService {

  constructor(private http: HttpClient) { }

  getAvilableCourses() {
    return this.http.get<any>('https://courseevaluator-main.herokuapp.com/api/v1/teachers/count', {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZXJ2ZS1jb3Vyc2VAcmFtYmxlci5ydSIsInJvbGUiOltdLCJpZCI6OSwiYXV0aGVudGljYXRlZCI6dHJ1ZSwiaWF0IjoxNjM1MzczMzAzLCJleHAiOjE2MzU0NTk3MDN9.-QYHbq40pRiPHxISK9c3haxpIY4wxniM9mZKrN4t3Mc'
      }
    })
  }
}
