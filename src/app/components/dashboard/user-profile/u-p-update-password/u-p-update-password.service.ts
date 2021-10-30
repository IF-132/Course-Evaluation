import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UpdateUserPassword } from './updatePasswordModel';
import { getToken } from '../token-data';

@Injectable()
export class UPUpdatePasswordService {
  //url and headers to get user data
  url = 'https://courseevaluator-main.herokuapp.com/api/v1/users/update-password';
  headers = new HttpHeaders({
    accept: '*/*',
    Authorization: getToken(),
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  patchUpdatedPassword(updatedUserPassword: UpdateUserPassword) {
    const body = {
      newPassword: updatedUserPassword.newPassword,
      oldPassword: updatedUserPassword.oldPassword,
    };
    return this.http.patch(this.url, body, { headers: this.headers })
  }
}
