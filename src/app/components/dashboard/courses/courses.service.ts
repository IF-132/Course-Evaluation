import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseDto } from 'src/app/share/models/CourseDto';
import { TokenService } from 'src/app/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  public courses: CourseDto[];
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  public create(course: CourseDto): Observable<CourseDto> {
    return this.http.post<CourseDto>(
      'https://courseevaluator-main.herokuapp.com/api/v1/courses/',
      course,
      this.tokenService.options
    );
  }

  public getAll(): Observable<CourseDto[]> {
    return this.http.get<CourseDto[]>(
      'https://courseevaluator-main.herokuapp.com/api/v1/courses/',
      this.tokenService.options
    );
  }

  public getAvailable(): Observable<CourseDto[]> {
    this.courses = [];
    return this.http.get<CourseDto[]>(
      'https://courseevaluator-main.herokuapp.com/api/v1/courses/available/',
      this.tokenService.options
    );
  }

  public update(course: CourseDto): Observable<CourseDto> {
    return this.http.put<CourseDto>(
      `https://courseevaluator-main.herokuapp.com/api/v1/courses/${course.id}`,
      course,
      this.tokenService.options
    );
  }

  public delete(id: number): Observable<CourseDto> {
    return this.http.delete<CourseDto>(
      `https://courseevaluator-main.herokuapp.com/api/v1/courses/${id}`,
      this.tokenService.options
    );
  }
}
