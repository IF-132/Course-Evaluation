import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegistComponent } from '../regist/regist.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public hidePass = true;
  public form: FormGroup | any ;
  public popupStatus: boolean;

  public formError: string = '';
  public formSuccess: string = '';

  constructor(
    private _http: HttpClient,
    private router: Router,
    private dialog: MatDialog


  ) {
    this.popupStatus = true;
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

  public closePopup():boolean {
    console.log(this.popupStatus)
    return this.popupStatus = !this.popupStatus;
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  public openRegist() {
    this.dialog.open(RegistComponent)
  }


  submitForm() {
    if (!this.form.valid) {
      this.formError = 'Please compleate Registration Form!';
    }

    if (this.form.valid) {
      this._http
        .post<any>(
          'https://courseevaluator-main.herokuapp.com/api/v1/auth/rlogin',
          this.form.value
        )
        .subscribe(
          (res) => {
            console.log('Sign up - successfull!');
            console.log(res, res.body);
            this.formSuccess = `Success! Check  ${res.email} to finish registration!`
            // if (this.active_2fa) {
            //   // add qr-image to local storage by 'qrCodeImage'- key
            //   localStorage.setItem('qrCodeImage', res.qrCodeImage);
            //   console.log(res.qrCodeImage);
            // }
            // show success message for 5 sec. and go to login page
              setTimeout(() => {
                this.form.reset();
                this.router.navigate(['login']);
            },7000)
          },
          (err) => {
            this.formError = err.error.message + '!';
            console.log(err.error.status, this.formError);
          }
        );
    }




  }


}
