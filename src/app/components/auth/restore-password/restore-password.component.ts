import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss']
})
export class RestorePasswordComponent implements OnInit {
    isSubmited = false;
    public form: FormGroup | any;
    public errorMessage = '';

    constructor (private accountService: AccountService) { }

    public ngOnInit(): void {
      this.form = new FormGroup({
        email : new FormControl('', [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), 
          Validators.email])
      })
      
    }

    get email() {
      return this.form.get('email')
    }

    getEmailError() {
      this.errorMessage = '';
      return this.email.hasError('required') ? 'You must enter an email address' :
      this.email.hasError('email') ? 'Not a valid email' : '';
    }
    
    public onSubmit(): void {
      console.log(this.form)
      this.isSubmited = true;
      this.accountService.restorePassword(this.form.value.email)
      .subscribe((response) => {
        console.log(response);
        this.isSubmited = true;
      },
      (error) => {
          this.errorMessage = error.message;
      });

    }

    public backToResend(): void {
      this.isSubmited = false;
    }
}
  