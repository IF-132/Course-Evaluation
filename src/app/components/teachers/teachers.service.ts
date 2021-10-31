import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { TeacherToCourseDto } from 'src/app/share/models/TeacherToCourseDto';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}
  public getTeachers(): Observable<TeacherToCourseDto[]> {
    return this.http.get<TeacherToCourseDto[]>(
      `https://courseevaluator-main.herokuapp.com/api/v1/teachers/`,
      this.tokenService.options
    );
  }
}
