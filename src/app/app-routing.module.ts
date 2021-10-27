import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestorePasswordComponent } from './components/auth/restore-password/restore-password.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'restore-password'},
  { path: 'restore-password', component: RestorePasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
