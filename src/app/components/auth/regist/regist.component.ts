import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss'],
})
export class RegistComponent implements OnInit {
  public hidePass = true;
  public hidePassConf = true;

  public myForm: FormGroup | any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&_*-]).{8,}$'
        ),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
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

  // Password match func
  // https://stackoverflow.com/questions/51605737/confirm-password-validation-in-angular-6

  onPasswordChange() {
    if (this.confirmPassword.value == this.password.value) {
      this.confirmPassword.setErrors(null);
    } else {
      this.confirmPassword.setErrors({ dontMatch: true });
    }
  }

  onSubmit() {
    if (this.myForm.valid) {
      const Data = { ...this.myForm.value };
      console.log(Data);
      this.myForm.reset();
    }
  }
}
