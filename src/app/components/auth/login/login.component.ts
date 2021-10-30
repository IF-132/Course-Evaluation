import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './loginService';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InvalidEmailPasswComponent } from './errors/invalid-email-passw/invalid-email-passw.component';
import { HttpErrorResponse } from '@angular/common/http';
import { TwoFAComponent } from '../two-fa/two-fa.component';
import { jwtDecodeUser } from 'src/app/share/models/jwtDecodeUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public hidePass = true;
  public form: FormGroup | any;
  private userInfo: jwtDecodeUser;

  constructor(private router: Router, private loginService: LoginService, public dialog: MatDialog, private loginRef: MatDialogRef<LoginComponent>) {
    
  }
  

  public openInvalidDataPopup():void {
    this.dialog.open(InvalidEmailPasswComponent)
  }

  public openTwoFAPopup():void {
    this.dialog.open(TwoFAComponent);
  }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&_*-]).{8,}$')
      ])
    })
  }

  public login():void {
    this.loginService.signIn(this.form).subscribe(response => {
      localStorage.setItem('token', response.token);
      this.userInfo = this.loginService.decodeToken(response.token);
      if(this.userInfo.authenticated) {
        this.loginRef.close();
      } else {
        this.loginRef.close();
        this.openTwoFAPopup();
      }
      
    },(error:HttpErrorResponse) => {
      if (error.error === "Invalid email/password combination"){
        this.openInvalidDataPopup();
      }
      console.log(error)
    });
    this.form.reset();
  }

  public redirect(link:string):void {
    if (link === "registration") {
      this.router.navigate(['register']);
    } else if (link === "forgotPassword") {
      this.router.navigate(['restorePassword']);
    }
    
  }

  public get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

}
