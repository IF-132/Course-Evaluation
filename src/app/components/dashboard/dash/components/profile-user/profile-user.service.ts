import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  decodeJwt from 'jwt-decode';
import { User } from 'src/app/share/models/User';

interface ParsedToken {
  authenticated: boolean
  exp: number
  iat: number
  id: number
  role?: []
  sub: string
}

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {
  token: string | any = window.localStorage.getItem("token");
  decodedToken: ParsedToken = decodeJwt(this.token);

  constructor(
    private http: HttpClient
  ) { }


  getUser() {
    return this.http.get<User>(`https://courseevaluator-main.herokuapp.com/api/v1/users/${this.decodedToken.id}`, {
      headers: {
        Authorization: this.token
      }
    })
  }
}
