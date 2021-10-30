import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITeacher, TeachersService } from '../teachers/teachers.service';
import { CoursesService, ICourse } from './courses.service';

import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

interface ICurrentUser {
  id: number;
  firstName: string;
  lastName: string;
  roles: string[];
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public Error: HttpErrorResponse;
  public courses: ICourse[];
  public teachers: ITeacher[];

  public currentlySelectedCourses = 'All';
  public formTitle = '';
  public courseForCreate: ICourse;
  public courseForUpdate: ICourse;
  public isEditOpen: boolean;
  public isCreateOpen: boolean;
  public toggleAvailableCourses = true;
  public colsBreackpoint = 4;

  public currentUser: ICurrentUser = {
    id: 42,
    firstName: 'Yurii',
    lastName: 'Hunda',
    // roles: ['ROLE_STUDENT'],
    // roles: ['ROLE_TEACHER'],
    roles: ['ROLE_ADMIN'],
    // roles: ['ROLE_STUDENT', 'ROLE_ADMIN', 'ROLE_TEACHER'],
  };

  constructor(
    private _snackBar: MatSnackBar,
    private coursesService: CoursesService,
    private teacherService: TeachersService
  ) {}

  public getAll(): Subscription {
    return this.coursesService.getAll().subscribe(
      (courses: ICourse[]) => {
        this.courses = courses;
      },
      (error: HttpErrorResponse) => {
        this.Error = error;
      }
    );
  }

  public getAvailable(): Subscription {
    return this.coursesService.getAvailable().subscribe(
      (courses) => {
        this.courses = courses;
      },
      (error: HttpErrorResponse) => (this.Error = error)
    );
  }

  public createCourse(course: ICourse): Subscription {
    this.closeForm(false);
    return this.coursesService.create(course).subscribe(
      (createdCourse: ICourse) => {
        this.openSnackBar(
          `Course ${createdCourse.courseName} successfully created!`,
          'Ok',
          ['green-snackbar']
        );
        return this.getAll();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        return (this.Error = error);
      }
    );
  }

  public updateCourse(course: ICourse): Subscription {
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
      (teacher: ITeacher[]) => {
        this.teachers = teacher;
      },
      (error: HttpErrorResponse) => {
        this.Error = error;
      }
    );
  }
  public openCreateForm(course: ICourse, whichForm: string): void {
    whichForm === 'create'
      ? (this.isCreateOpen = true)
      : whichForm === 'update'
      ? (this.isEditOpen = true)
      : null;
    this.courseForUpdate = Object.assign({}, course);
    this.courseForCreate = {} as ICourse;
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
        : windowWidth >= 1300
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

  public ngOnInit(): void {
    this.getTeachers();
    this.getAll();
    this.setColsInGridList(window.innerWidth);
  }
}
