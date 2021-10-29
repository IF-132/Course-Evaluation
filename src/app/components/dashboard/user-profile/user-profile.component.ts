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
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYXRyeWNoMTIzNEBnbWFpbC5jb20iLCJyb2xlIjpbXSwiaWQiOjcwLCJhdXRoZW50aWNhdGVkIjp0cnVlLCJpYXQiOjE2MzU1Mjg4MDAsImV4cCI6MTYzNTYxNTIwMH0.8nWOiKO10vmFQ40rquZ86DoUXVMLVOcNoyDpBln2wGw'
    );
  }
}
