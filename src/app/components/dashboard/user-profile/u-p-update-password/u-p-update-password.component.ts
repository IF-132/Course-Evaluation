import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-u-p-update-password',
  templateUrl: './u-p-update-password.component.html',
  styleUrls: ['./u-p-update-password.component.scss'],
})
export class UPUpdatePasswordComponent implements OnInit {
  editUserPassword: FormGroup;

  constructor() {
    this.editUserPassword = new FormGroup({
      oldPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&_*-]).{8,}$'
        ),
      ]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&_*-]).{8,}$'
        ),
      ]),
      confirmedPassword: new FormControl('', Validators.required),
    });
  }

  // Checking if passwords match
  onPasswordChange() {
    if (this.confirmedPassword.value == this.newPassword.value) {
      this.confirmedPassword.setErrors(null);
    } else {
      this.confirmedPassword.setErrors({ mismatch: true });
    }
  }

  // getting the form control elements
  get newPassword(): AbstractControl {
    return this.editUserPassword.controls['newPassword'];
  }

  get confirmedPassword(): AbstractControl {
    return this.editUserPassword.controls['confirmedPassword'];
  }

  ngOnInit(): void {
    console.log('u-p-update-password component is initialized! ');
  }

  //TODO: pass data to server
  editPasswordSubmission(): void {
    let updatedUserPassword = {
      "newPassword": this.editUserPassword.value.newPassword,
      "oldPassword": this.editUserPassword.value.oldPassword
    };
    console.log('Password is updated!');
    console.log(updatedUserPassword);
  }
}
