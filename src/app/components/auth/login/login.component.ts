import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public hidePass = true;
  public form: FormGroup | any ;
  public popupStatus: boolean;

  constructor() {
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

  submitForm() {
    this.form.reset();
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

}
