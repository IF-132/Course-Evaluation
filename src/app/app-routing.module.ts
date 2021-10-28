import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistComponent } from './components/auth/regist/regist.component';
import { TwoFAComponent } from './components/auth/two-fa/two-fa.component';
import { HelloPageComponent } from './components/hello-page/hello-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'hello-page', pathMatch: 'full' },
  { path: 'hello-page', component: HelloPageComponent},
  { path: 'regist', component: RegistComponent },
  { path: 'login', component: LoginComponent },
  { path: 'two-fa', component: TwoFAComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
