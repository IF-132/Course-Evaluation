import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UPUpdatePasswordService } from './u-p-update-password.service';
import { UpdateUserPassword } from './updatePasswordModel';

@Component({
  selector: 'app-u-p-update-password',
  templateUrl: './u-p-update-password.component.html',
  styleUrls: ['./u-p-update-password.component.scss'],
  providers: [UPUpdatePasswordService],
})
export class UPUpdatePasswordComponent implements OnInit {
  editUserPassword: FormGroup;

  constructor(private upUpdatePasswordService: UPUpdatePasswordService) {
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
  get oldPassword(): AbstractControl {
    return this.editUserPassword.controls['oldPassword'];
  }

  get newPassword(): AbstractControl {
    return this.editUserPassword.controls['newPassword'];
  }

  get confirmedPassword(): AbstractControl {
    return this.editUserPassword.controls['confirmedPassword'];
  }

  ngOnInit(): void {
    console.log('u-p-update-password component is initialized! ');
  }

  //passing data to server
  editPasswordSubmission(): void {
    let updatedUserPassword: UpdateUserPassword = {
      newPassword: this.editUserPassword.value.newPassword,
      oldPassword: this.editUserPassword.value.oldPassword,
    };
    this.upUpdatePasswordService
      .patchUpdatedPassword(updatedUserPassword)
      .subscribe(
        (data: any) => console.log(data),
        (error) => {
          console.log(error);
          this.oldPassword.setErrors({ badOldPassword: true });
        }
      );
    this.editUserPassword.reset();
    this.oldPassword.setErrors(null);
    this.newPassword.setErrors(null);
    this.confirmedPassword.setErrors(null);
  }
}
