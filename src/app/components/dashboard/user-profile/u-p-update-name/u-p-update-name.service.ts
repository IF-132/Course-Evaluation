import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UpdateUserName } from './updateUserNameModel';
import { getToken } from '../token-data';

@Injectable()
export class UPUpdateNameService {
  //url and headers to get user data
  url = 'https://courseevaluator-main.herokuapp.com/api/v1/users';
  headers = new HttpHeaders({
    accept: '*/*',
    Authorization: getToken(),
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  patchUserName(updateUserName: UpdateUserName) {
    const body = {
      firstName: updateUserName.firstName,
      lastName: updateUserName.lastName,
    };
    return this.http.patch(this.url, body, { headers: this.headers })
  }
}
