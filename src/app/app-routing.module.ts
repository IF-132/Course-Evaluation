import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistComponent } from './components/auth/regist/regist.component';
import { HelloPageComponent } from './components/hello-page/hello-page.component';

const routes: Routes = [
  { path: '', component: HelloPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'regist', component: RegistComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
