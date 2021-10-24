import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss']
})
export class RestorePasswordComponent implements OnInit {

    public form: FormGroup | any;;
    

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
      return this.email.hasError('required') ? 'You must enter an email address' :
      this.email.hasError('email') ? 'Not a valid email' : '';
    }
    
    public onSubmit(): void {
      console.log(this.form)
    }
}
  