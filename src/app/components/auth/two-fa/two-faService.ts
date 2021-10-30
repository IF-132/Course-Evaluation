
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";
import { Observable } from "rxjs";
import { jwtDecodeUser } from "src/app/share/models/jwtDecodeUser";

@Injectable({
    providedIn: 'root',
  })

export class TwoFAService{
    private userInfo:jwtDecodeUser;
    private httpOptions = {
          'Content-Type':  'application/json',
          'Authorization': ''
      };

    constructor(private http: HttpClient) {   
    }
    
    public confirmCode(code:string, token:string):Observable<any> {
        this.userInfo = jwtDecode(token);
        this.httpOptions.Authorization = token;
        return this.http.post(`https://courseevaluator-main.herokuapp.com/api/v1/auth/verify?code=${code}&email=${this.userInfo.sub}`,"", {'headers': this.httpOptions});
    }
}