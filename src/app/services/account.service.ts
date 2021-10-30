import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PasswordRestoreDto } from '../share/models/PasswordRestoreDto';

const baseUrl = `https://courseevaluator-main.herokuapp.com/api/v1`

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}

  public restorePassword(email: string): Observable<string> {
    email = email.trim();
    const params = new HttpParams()
      .set('email', email);

    return this.http.get<string>(`${baseUrl}/auth/restorePassword`, {params});
  }

  public changePassword(body: PasswordRestoreDto) {
    return this.http.post(`${baseUrl}/auth/changePassword`, body);
  }


}
