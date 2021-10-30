import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/share/models/User';
import { Observable } from 'rxjs';
import { ProfileUserService } from './profile-user.service';
import  decodeJwt from 'jwt-decode';
import { LoaderService } from 'src/app/share/loader/loader.service';

interface ParsedToken {
  authenticated: boolean
  exp: number
  iat: number
  id: number
  role?: []
  sub: string
}

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
  isOpen: boolean = false;
  user: User

  constructor(
    public loaderService: LoaderService,
    private userServise: ProfileUserService
  ) { }

  ngOnInit(): void {
   this.userServise.getUser().subscribe(
     (data) => this.user = data
   );
  }
}
