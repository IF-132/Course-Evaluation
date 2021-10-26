import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { SignUpInfo } from './regist-info'
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  private signupUrl = 'https://courseevaluator.herokuapp.com/api/v1/' + 'auth/reg';

  constructor(private http: HttpClient) {
  }



  signUp(info: SignUpInfo): Observable<any> {
    return this.http.post(this.signupUrl, info, httpOptions);
  }
}
