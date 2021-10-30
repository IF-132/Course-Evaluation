import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-u-p-update-picture',
  templateUrl: './u-p-update-picture.component.html',
  styleUrls: ['./u-p-update-picture.component.scss'],
})
export class UPUpdatePictureComponent implements OnInit {

  editUserPicture: FormGroup;

  constructor() {}

  ngOnInit(): void {
    console.log('u-p-update-picture component is initialized! ');
  }

  //TODO: pass data to server
  editPictureSubmission(): void {
    console.log('Picture is updated!');
  }
}
