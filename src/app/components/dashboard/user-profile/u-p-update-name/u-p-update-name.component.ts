import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-u-p-update-name',
  templateUrl: './u-p-update-name.component.html',
  styleUrls: ['./u-p-update-name.component.scss'],
})
export class UPUpdateNameComponent implements OnInit {
  editUserData: FormGroup;

  constructor() {
    this.editUserData = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Z]{1}[a-z]{0,20}'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Z]{1}[a-z]{0,20}'),
      ]),
    });
  }

  ngOnInit(): void {
    console.log('u-p-update-name is initialized! ');
  }

  //TODO: pass data to server
  editDataSubmission(): void {
    let updatedUserData = {
      firstName: this.editUserData.value.firstName,
      lastName: this.editUserData.value.lastName,
    };
    console.log(updatedUserData);
  }
}
