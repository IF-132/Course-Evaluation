import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './components/auth/login/login.component';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { RegistComponent } from './components/auth/regist/regist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Course-Evaluation';

  // TODO:  atribute "show" must be 'false' for unregistered user!
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

  ngOnInit(): void {
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
  logOut(): void {
    localStorage.clear();
    this.router.navigate(['']);
    window.location.reload();
  }
}
