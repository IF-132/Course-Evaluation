import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  
  public form: FormGroup | any;
  public hidePass = true;
  public hidePassConf = true;
  token = null;

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

    const token = this.activatedRoute.snapshot.queryParams['token'];
   
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  onPasswordChange() {
    if (this.confirmPassword.value == this.password.value) {
      this.confirmPassword.setErrors(null);
    } else {
      this.confirmPassword.setErrors({ dontMatch: true });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const Data = { ...this.form.value };
      console.log(Data);
      this.form.reset();
    }
  }

}
