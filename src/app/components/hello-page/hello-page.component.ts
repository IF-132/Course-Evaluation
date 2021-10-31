import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegistComponent } from '../auth/regist/regist.component';
import { RestorePasswordComponent } from '../auth/restore-password/restore-password.component';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-hello-page',
  templateUrl: './hello-page.component.html',
  styleUrls: ['./hello-page.component.scss'],
})
export class HelloPageComponent implements OnInit{
  public registered: boolean;
  public decoded: any;
  public userName: any;

  constructor(private dialog: MatDialog, private router: Router) {}

  public openLogin(): void {
    this.dialog.open(LoginComponent);
  }
  public openRegist(): void {
    this.dialog.open(RegistComponent);
  }

  public openRestorePassword(): void {
    this.dialog.open(RestorePasswordComponent);
  }

  ngOnInit(): void {
    if (localStorage.hasOwnProperty('token')) {
      const token: any = localStorage.getItem('token');
      this.decoded = jwt_decode(token);
      console.log(this.decoded);
      this.registered = this.decoded.authenticated;
      this.userName = this.decoded.sub;
  }
  }

  public openDialog(): void {
    this.dialog.open(RegistComponent);
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['']);
    window.location.reload();
  }
}
