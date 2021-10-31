import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Subscription } from 'rxjs';

import { TeachersService } from '../../teachers/teachers.service';
import { CoursesService } from './courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { jwtDecodeUser } from 'src/app/share/models/jwtDecodeUser';
import { CourseDto } from 'src/app/share/models/CourseDto';
import { TeacherToCourseDto } from 'src/app/share/models/TeacherToCourseDto';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public Error: HttpErrorResponse;
  public courses: CourseDto[];
  public teachers: TeacherToCourseDto[];

  public currentlySelectedCourses = 'All';
  public formTitle = '';
  public courseForCreate: CourseDto;
  public courseForUpdate: CourseDto;
  public isEditOpen: boolean;
  public isCreateOpen: boolean;
  public toggleAvailableCourses = true;
  public colsBreackpoint = 4;

  public currentUser: jwtDecodeUser;

  constructor(
    private _snackBar: MatSnackBar,
    private coursesService: CoursesService,
    private teacherService: TeachersService,
    private tokenService: TokenService
  ) {}

  public getAll(): Subscription {
    return this.coursesService.getAll().subscribe(
      (courses: CourseDto[]) => {
        this.courses = courses;
      },
      (error: HttpErrorResponse) => {
        this.Error = error;
      }
    );
  }

  public getAvailable(): Subscription {
    return this.coursesService.getAvailable().subscribe(
      (courses: CourseDto[]) => {
        this.courses = courses;
      },
      (error: HttpErrorResponse) => (this.Error = error)
    );
  }

  public createCourse(course: CourseDto): Subscription {
    this.closeForm(false);
    return this.coursesService.create(course).subscribe(
      (createdCourse: CourseDto) => {
        this.openSnackBar(
          `Course ${createdCourse.courseName} successfully created!`,
          'Ok',
          ['green-snackbar']
        );
        return this.getAll();
      },
      (error: HttpErrorResponse) => {
        return (this.Error = error);
      }
    );
  }

  public updateCourse(course: CourseDto): Subscription {
    this.closeForm(false);

    return this.coursesService.update(course).subscribe(
      () => {
        return this.getAll();
      },
      (error: HttpErrorResponse) => (this.Error = error)
    );
  }

  public delete(id: number): Subscription {
    return this.coursesService.delete(id).subscribe(
      () => {
        this.openSnackBar('Succsessfully deleted!', 'Ok', ['green-snackbar']);
        this.toggleAvailableCourses ? this.getAll() : this.getAvailable();
      },
      () => {
        this.openSnackBar('Something went wrong!', 'Sorry', ['red-snackbar']);
      }
    );
  }

  public getTeachers(): Subscription {
    return this.teacherService.getTeachers().subscribe(
      (teacher: TeacherToCourseDto[]) => {
        this.teachers = teacher;
      },
      (error: HttpErrorResponse) => {
        this.Error = error;
      }
    );
  }
  public openCreateForm(course: CourseDto, whichForm: string): void {
    whichForm === 'create'
      ? (this.isCreateOpen = true)
      : whichForm === 'update'
      ? (this.isEditOpen = true)
      : null;
    this.courseForUpdate = Object.assign({}, course);
    this.courseForCreate = {} as CourseDto;
  }

  public closeForm(data: boolean): void {
    this.isEditOpen = data;
    this.isCreateOpen = data;
  }
  public openSnackBar(
    message: string,
    button: string,
    classNames: string[]
  ): void {
    const config = {
      panelClass: classNames,
      duration: 3000,
    };
    this._snackBar.open(message, button, config);
  }

  public onSlideChange(): void {
    if (!this.toggleAvailableCourses) {
      this.currentlySelectedCourses = 'All';
      this.getAll();
    } else {
      this.currentlySelectedCourses = 'Available';
      this.getAvailable();
    }
  }

  public setColsInGridList(windowWidth: number): void {
    this.colsBreackpoint =
      windowWidth <= 530
        ? 1
        : windowWidth <= 1000
        ? 2
        : windowWidth >= 1550
        ? 4
        : 3;
  }
  public onResize(event: UIEvent): void {
    const window = event.target as Window;
    this.setColsInGridList(window.innerWidth);
  }

  public scrollTo(el: HTMLElement): void {
    el.scrollIntoView();
  }

  public setCurrentUser(): void {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.currentUser = jwt_decode(token);
    }
  }

  public ngOnInit(): void {
    this.setCurrentUser();
    this.getTeachers();
    this.getAll();
    this.setColsInGridList(window.innerWidth);
  }
}
