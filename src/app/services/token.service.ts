import { Injectable } from '@angular/core';
import { jwtDecodeUser } from '../share/models/jwtDecodeUser';
import jwt_decode from 'jwt-decode';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public currentUser: jwtDecodeUser;
  public token: string;
  public headers: HttpHeaders;
  public options: { headers: HttpHeaders };

  public getToken(): void {
    this.token = window.localStorage.getItem('token') || '';
    if (this.token.length) {
      this.setHeaders(this.token);
    }
  }

  public setCurrentUser(): void {
    this.currentUser = jwt_decode(this.token);
  }

  public setHeaders(token: string): void {
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.options = {
      headers: this.headers,
    };
  }
}
