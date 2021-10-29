import { Component, OnInit} from '@angular/core';
import { UPDataService } from './u-p-data.service';
import { UserById } from './userByIdModel';
import { getTokenRole } from '../token-data';

@Component({
  selector: 'app-u-p-data',
  templateUrl: './u-p-data.component.html',
  styleUrls: ['./u-p-data.component.scss'],
  providers: [UPDataService]
})
export class UPDataComponent implements OnInit {
  //default user picture
  defaultUserPictureURL =
    '/assets/images/user-profile/default-user-picture.jpg';

  //data model to get from server
  userById: UserById | undefined;

  //role
  userRole: [] | undefined;

  //TODO: get this links
  linkToDashboard = '';
  linkToMainPage = '';

  constructor(private upDataService: UPDataService) {}

  ngOnInit(): void {
this.upDataService.getData().subscribe((data: any) =>
      this.userById = new UserById(
        data.firstName,
        data.lastName,
        data.email,
        data.active2fa,
        data.profilePicture
      )
    );
    this.userRole = getTokenRole();
  }

  //TODO: make HTTPRequest to logout
  logout(): void {
    console.log('logged out!');
  }
}
