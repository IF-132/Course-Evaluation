import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { RestorePasswordComponent } from './components/auth/restore-password/restore-password.component';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { RegistComponent } from './components/auth/regist/regist.component';
import { LoginComponent } from './components/auth/login/login.component';
// import { appendFile } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Course-Evaluation';

  constructor() {}
}
