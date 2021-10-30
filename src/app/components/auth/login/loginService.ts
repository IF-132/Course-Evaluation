import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import jwtDecode from "jwt-decode";
import { Observable } from "rxjs";
import { jwtDecodeUser } from "src/app/share/models/jwtDecodeUser";
import { loginModel } from "./loginModel";

@Injectable({
    providedIn: 'root',
  })

export class LoginService {
    private userInfo:jwtDecodeUser;
    private header:any = {
        'Content-type': 'application/json',
      };

    constructor(private http:HttpClient) {
    }

    public signIn(data:FormGroup):Observable<any> {
        const form:loginModel = data.value;
        return this.http.post('https://courseevaluator-main.herokuapp.com/api/v1/auth/login',form,{"headers": this.header});
    }

    public decodeToken(token:string):jwtDecodeUser {
      this.userInfo = jwtDecode(token);
      return this.userInfo;
    }
}