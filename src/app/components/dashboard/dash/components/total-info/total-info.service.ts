import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeacherStatDto } from 'src/app/share/models/TeacherStatDto';
import { User } from 'src/app/share/models/User';

@Injectable({
  providedIn: 'root'
})
export class TotalInfoService {
  token: string | any = window.localStorage.getItem("token");

  constructor(private http: HttpClient) { }

  getAvilableCourses() {
    return this.http.get<any>('https://courseevaluator-main.herokuapp.com/api/v1/teachers/count', {
      headers: {
        Authorization: this.token
      }
    })
  }
}
