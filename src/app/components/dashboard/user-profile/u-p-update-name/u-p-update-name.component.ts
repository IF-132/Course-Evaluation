import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateUserName } from './updateUserNameModel';
import { UPUpdateNameService } from './u-p-update-name.service';

@Component({
  selector: 'app-u-p-update-name',
  templateUrl: './u-p-update-name.component.html',
  styleUrls: ['./u-p-update-name.component.scss'],
  providers: [UPUpdateNameService],
})
export class UPUpdateNameComponent implements OnInit {
  editUserData: FormGroup;
  namePattern = '[A-Z]{0,1}[a-z]{0,20}';

  receivedUserData: UpdateUserName;

  constructor(private upUpdateNameService: UPUpdateNameService) {
    this.editUserData = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(this.namePattern),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(this.namePattern),
      ]),
    });
  }

  ngOnInit(): void {
    console.log('u-p-update-name is initialized! ');
  }

  //passing data to server
  editDataSubmission(): void {
    let updatedUserData: UpdateUserName = {
      firstName: this.editUserData.value.firstName,
      lastName: this.editUserData.value.lastName,
    };
    this.upUpdateNameService.patchUserName(updatedUserData).subscribe(
      (data: any) => console.log(data),
      (error) => console.log(error)
    );
    window.location.reload();
  }
}
