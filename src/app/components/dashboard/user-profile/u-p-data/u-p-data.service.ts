import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getToken, getTokenId } from '../token-data';

@Injectable({
  providedIn: 'root',
})
export class UPDataService {
  //url and headers to get user data
  url =
    'https://courseevaluator-main.herokuapp.com/api/v1/users/' + getTokenId();
  headers = new HttpHeaders({
    accept: '*/*',
    Authorization: getToken(),
  });

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.url, { headers: this.headers });
  }
}
