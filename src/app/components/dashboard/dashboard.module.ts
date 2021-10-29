import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { StudentsComponent } from './students/students.component';
import { TotalInfoComponent } from './dash/components/total-info/total-info.component';
import { AvailableCoursesComponent } from './dash/components/available-courses/available-courses.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ProfileUserComponent } from './dash/components/profile-user/profile-user.component';
import { CourseComponent } from './dash/components/available-courses/components/course/course.component';
import { TeacherRatingComponent } from './dash/components/teacher-rating/teacher-rating.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CoursesComponent } from './courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

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
    HttpClientModule,
    MatProgressSpinnerModule,
    MatIconModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
})
export class DashboardModule {}
