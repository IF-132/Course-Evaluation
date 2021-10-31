import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { RestorePasswordComponent } from './components/auth/restore-password/restore-password.component';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { RegistComponent } from './components/auth/regist/regist.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TokenService } from './services/token.service';
// import { appendFile } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'Course-Evaluation';

  // TODO:  atribute "show" must be 'false' for unregistered user!
  public registered: boolean;
  public decoded: any;
  public userName: any;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private tokenService: TokenService
  ) {}

  public openLogin(): void {
    this.dialog.open(LoginComponent);
  }
  public openRegist(): void {
    this.dialog.open(RegistComponent);
  }

  public openRestorePassword(): void {
    this.dialog.open(RestorePasswordComponent);
  }
  public ngOnInit(): void {
    this.tokenService.getToken();
    this.tokenService.setCurrentUser();
    // chek if user logged in
    if (localStorage.hasOwnProperty('token')) {
      //decoding token
      let tokenLoc: any = localStorage.getItem('token');
      this.decoded = jwt_decode(tokenLoc);
    }
    console.log(this.decoded);

    // set visibility fot logged user
    this.registered = this.decoded.authenticated;
    this.userName = this.decoded.sub;
  }

  // logout user
  public logOut(): void {
    localStorage.clear();
    this.router.navigate(['']);
    window.location.reload();
  }
}
