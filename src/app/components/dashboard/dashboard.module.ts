import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { TotalInfoComponent } from './dash/components/total-info/total-info.component';
import { AvailableCoursesComponent } from './dash/components/available-courses/available-courses.component';
import { ProfileUserComponent } from './dash/components/profile-user/profile-user.component';
import { CourseComponent } from './dash/components/available-courses/components/course/course.component';
import { TeacherRatingComponent } from './dash/components/teacher-rating/teacher-rating.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CoursesComponent } from './courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { angularMaterial } from '../../share/angularMaterial/material';
import { CourseFormActionComponent } from './courses/course-form-action/course-form-action';
import { FormsModule } from '@angular/forms';
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    DashComponent,
    TotalInfoComponent,
    AvailableCoursesComponent,
    ProfileUserComponent,
    CourseComponent,
    TeacherRatingComponent,
    CoursesComponent,
    CourseFormActionComponent,
   ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    angularMaterial,
    FormsModule,
    ChatModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
})
export class DashboardModule {}
