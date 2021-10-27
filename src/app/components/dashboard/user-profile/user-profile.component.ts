import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor() {}

  //TODO: get User id and Role from token like this
  //tokenData : {};
  tokenData = {
    sub: 'katrych1234@gmail.com',
    role: [/*'ROLE_ADMIN',*/ 'ROLE_STUDENT'],
    id: 22,
    authenticated: true,
    iat: 1635241454,
    exp: 1635327854,
  };

  //TODO: get id and role(String) from token
  ngOnInit() {
    // let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYXRyeWNoMTIzNEBnbWFpbC5jb20iLCJyb2xlIjpbXSwiaWQiOjIyLCJhdXRoZW50aWNhdGVkIjp0cnVlLCJpYXQiOjE2MzUyNDE0NTQsImV4cCI6MTYzNTMyNzg1NH0.dnK3dfc92RICy-1RRp5vkElNdjmUZUzRH_C5FMXyOfo";
    // this.tokenData = jwt_decode(token);
    console.log("I'm ready");
  }
}
