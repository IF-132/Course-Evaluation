import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { StudentsComponent } from './students/students.component';
import { TotalInfoComponent } from './components/total-info/total-info.component';
import { AvailableCoursesComponent } from './components/available-courses/available-courses.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { CourseComponent } from './components/available-courses/components/course/course.component';
import { TeacherRatingComponent } from './components/teacher-rating/teacher-rating.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CoursesComponent } from './courses/courses.component';

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
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
})
export class DashboardModule {}
