import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';

const routes: Routes = [
  { path: '', component: HelloPageComponent },
  { path: 'change-password', component: ChangePasswordComponent }

];
import { HelloPageComponent } from './components/hello-page/hello-page.component';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
