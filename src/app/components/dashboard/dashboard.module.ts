import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { StudentsComponent } from './students/students.component';
import { TotalInfoComponent } from './dash/components/total-info/total-info.component';
import { AvailableCoursesComponent } from './dash/components/available-courses/available-courses.component';
import { ProfileUserComponent } from './dash/components/profile-user/profile-user.component';
import { CourseComponent } from './dash/components/available-courses/components/course/course.component';
import { TeacherRatingComponent } from './dash/components/teacher-rating/teacher-rating.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CoursesComponent } from './courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { angularMaterial } from "../../share/angularMaterial/material";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashComponent,
    StudentsComponent,
    TotalInfoComponent,
    AvailableCoursesComponent,
    ProfileUserComponent,
    CourseComponent,
    TeacherRatingComponent,
    CoursesComponent,
    angularMaterial
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
})
export class DashboardModule {}
