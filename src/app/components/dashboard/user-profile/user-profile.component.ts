import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor() {}

  //TODO: delete token setting
  ngOnInit() {
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYXRyeWNoMTIzNEBnbWFpbC5jb20iLCJyb2xlIjpbXSwiaWQiOjcwLCJhdXRoZW50aWNhdGVkIjp0cnVlLCJpYXQiOjE2MzU1OTkyNDgsImV4cCI6MTYzNTY4NTY0OH0.o6R8bTeqdDXQPhehCuzP8ZC2vNTQJgz5PglxhVqIEbw'
    );
    console.log("user-app-profile initialized");
  }
}
