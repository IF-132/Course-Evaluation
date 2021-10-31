import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { EmailExistComponent } from './error/email-exist/email-exist.component';
import { EmailNotConfirmedComponent } from './error/email-not-confirmed/email-not-confirmed.component';
import { SuccessComponent } from './success/success.component';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss'],
})
export class RegistComponent implements OnInit {
  public hidePass = true;
  public hidePassConf = true;

  public myForm: FormGroup;

  public formError: string = '';
  public formSuccess: string = '';

  constructor(
    private fb: FormBuilder,
    private _http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&_*-]).{8,}$'
          ),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
      active_2fa: ['true'],
    });
  }

  get firstName() {
    return this.myForm.get('firstName') as FormArray;
  }

  get lastName() {
    return this.myForm.get('lastName') as FormArray;
  }

  get email() {
    return this.myForm.get('email') as FormArray;
  }

  get password() {
    return this.myForm.get('password') as FormArray;
  }

  get confirmPassword() {
    return this.myForm.get('confirmPassword') as FormArray;
  }
  get active_2fa() {
    return this.myForm.get('active_2fa') as FormArray;
  }

  public openLogIn() {
    this.dialog.open(LoginComponent);
  }

  // Password match func

  onPasswordChange() {
    if (this.confirmPassword.value === this.password.value) {
      this.confirmPassword.setErrors(null);
    } else {
      this.confirmPassword.setErrors({ dontMatch: true });
    }
  }

  onRegist() {
    const Data = { ...this.myForm.value };
    console.log(Data);
    if (this.myForm.valid) {
      this._http
        .post<any>(
          'https://courseevaluator-main.herokuapp.com/api/v1/auth/reg',
          this.myForm.value
        )
        .subscribe(
          (res) => {
            console.log('Sign up - successfull!');
            console.log(res, res.body);
            if (res) {
              this.dialog.open(SuccessComponent);
              setTimeout(() => {
                window.location.reload();
              }, 5000);
            }
            if (this.active_2fa) {
              // add qr-image to local storage by 'qrCodeImage'- key
              localStorage.setItem('qrCodeImage', res.qrCodeImage);
              console.log(res.qrCodeImage);
            }
          },
          (err) => {
            if (
              err.error.message === 'Email already exist. Please confirm it'
            ) {
              this.dialog.open(EmailNotConfirmedComponent);
            }
            if (err.error.message === 'User already exist') {
              this.dialog.open(EmailExistComponent);
            }
            console.log(err.error);
          }
        );
    }
  }
}
