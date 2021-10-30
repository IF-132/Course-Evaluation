
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/dashboard/courses/courses.component';
import { HelloPageComponent } from './components/hello-page/hello-page.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { AdminChatComponent } from './components/dashboard/chat/admin-chat/admin-chat.component';

const routes: Routes = [
  { path: '', component: HelloPageComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'chat', component: AdminChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
