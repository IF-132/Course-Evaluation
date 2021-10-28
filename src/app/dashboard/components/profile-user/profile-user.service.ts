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
  decodedToken: ParsedToken = decodeJwt("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZXJ2ZS1jb3Vyc2VAcmFtYmxlci5ydSIsInJvbGUiOltdLCJpZCI6OSwiYXV0aGVudGljYXRlZCI6dHJ1ZSwiaWF0IjoxNjM1MzczMzAzLCJleHAiOjE2MzU0NTk3MDN9.-QYHbq40pRiPHxISK9c3haxpIY4wxniM9mZKrN4t3Mc");

  constructor(
    private http: HttpClient
  ) { }


  getUser() {
    return this.http.get<User>(`https://courseevaluator-main.herokuapp.com/api/v1/users/${this.decodedToken.id}`, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZXJ2ZS1jb3Vyc2VAcmFtYmxlci5ydSIsInJvbGUiOltdLCJpZCI6OSwiYXV0aGVudGljYXRlZCI6dHJ1ZSwiaWF0IjoxNjM1MzczMzAzLCJleHAiOjE2MzU0NTk3MDN9.-QYHbq40pRiPHxISK9c3haxpIY4wxniM9mZKrN4t3Mc'
      }
    })
  }
}
