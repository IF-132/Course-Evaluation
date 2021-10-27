import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-u-p-data',
  templateUrl: './u-p-data.component.html',
  styleUrls: ['./u-p-data.component.scss'],
})
export class UPDataComponent implements OnInit {
  defaultUserPictureURL =
    '/assets/images/user-profile/default-user-picture.jpg';

  @Input() userId: number;
  @Input() userRole: string[] = [];

  //TODO: get this links
  linkToDashboard = '';
  linkToMainPage = '';

  constructor() {}

  ngOnInit(): void {
    console.log('u-p-data component is initialized! ');
  }

  //TODO: get User profile model by id like this
  userData = {
    firstName: 'Irene',
    lastName: 'Katrych',
    email: 'katrych1234@gmail.com',
    active2fa: false,
    profilePicture: ""// '/assets/images/user-profile/test-avatar.jpg',
  };

  //TODO: make HTTPRequest to logout
  logout(): void {
    console.log('logged out!');
  }
}
