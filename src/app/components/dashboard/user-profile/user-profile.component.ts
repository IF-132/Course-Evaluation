import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor() {}

  //TODO: get User id and Role from token like this
  tokenData = {
    sub: 'katrych1234@gmail.com',
    role: [/*'ROLE_ADMIN',*/ 'ROLE_STUDENT'],
    id: 22,
    authenticated: true,
    iat: 1635241454,
    exp: 1635327854,
  };

  //TODO: get id and role(String) from token
  ngOnInit(): void {
    console.log("I'm ready");
  }
}
