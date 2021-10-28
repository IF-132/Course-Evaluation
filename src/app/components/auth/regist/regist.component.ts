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
import { Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private _http: HttpClient,
    private router: Router
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

  // Password match func
  // https://stackoverflow.com/questions/51605737/confirm-password-validation-in-angular-6

  onPasswordChange() {
    if (this.confirmPassword.value === this.password.value) {
      this.confirmPassword.setErrors(null);
    } else {
      this.confirmPassword.setErrors({ dontMatch: true });
    }
  }

  onRegist() {
    if (!this.myForm.valid) {
      this.formError = 'Please compleate Registration Form!';
    }
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
            this.myForm.clearValidators();
            if (this.active_2fa) {
              // add qr-image to local storage by 'qrCodeImage'- key
              localStorage.setItem('qrCodeImage', res.qrCodeImage);
              console.log(res.qrCodeImage);
            } else {
              this.router.navigate(['login']);
            }
          },
          (err) => {
            this.formError = err.error.message + '!';
            console.log('Something went wrong!');
            console.log(this.formError);
          }
        );
    }
  }
}
