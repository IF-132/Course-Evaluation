import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AccountService } from '../../../services/account.service';
import {ActivatedRoute} from "@angular/router";
import { PasswordRestoreDto } from '../../../share/models/PasswordRestoreDto';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  
  public form: FormGroup | any;
  public hidePass = true;
  public hidePassConf = true;
  public errorMessage = '';
  public showResendLinkButton= false;
  private token: string = '';
  
  constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&_*-]).{8,}$'
        ),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });

    this.token = this.activatedRoute.snapshot.queryParams['token'];
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  onPasswordChange() {
    this.errorMessage = '';
    this.showResendLinkButton = false;

    if (this.confirmPassword.value == this.password.value) {
      this.confirmPassword.setErrors(null);
    } else {
      this.confirmPassword.setErrors({ dontMatch: true });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const formValues = this.form.getRawValue();
      let requestParams: PasswordRestoreDto = {
        confirmPassword: formValues.confirmPassword,
        password: formValues.password,
        token: this.token};

      this.accountService.changePassword(requestParams)
        .subscribe(()=> {
          this.errorMessage = '';
          window.location.href='';
        },
        (error)=> {
          this.errorMessage = error.error.message;
          if (error.error.error === 'ConfirmationTokenException') {
            this.showResendLinkButton = true;
          }
        });
    }
  }

}
