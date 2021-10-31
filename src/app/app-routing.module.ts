import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/dashboard/courses/courses.component';
import { HelloPageComponent } from './components/hello-page/hello-page.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashComponent } from './components/dashboard/dash/dash.component';
import { StudentsComponent } from './components/dashboard/students/students.component';
import { UserProfileComponent } from './components/dashboard/user-profile/user-profile.component';
import { AdminChatComponent } from './components/dashboard/chat/admin-chat/admin-chat.component';

const routes: Routes = [
  {
    path: '',
    component: HelloPageComponent,
  },
  { path: 'change-password', component: ChangePasswordComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashComponent },
      { path: 'chat', component: AdminChatComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'user-profile', component: UserProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
