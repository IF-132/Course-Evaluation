import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = `https://courseevaluator-main.herokuapp.com/api/v1`

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}

  public restorePassword(email: string): Observable<any> {
    email = email.trim();
    const params = new HttpParams()
      .set('email', email);


    return this.http.get(`${baseUrl}/auth/restorePassword`, {params});
}

  public resetPassword(token: string, password: string, confirmPassword: string) {
    return this.http.post(`${baseUrl}/auth/changePassword`, { token, password, confirmPassword})
  
}

// private handleError(error: HttpErrorResponse) {
//   if (error.status === 500) {
//         console.error('An error occurred:', error.message);
//   } 
  
//   return throwError(
//     'Something bad happened; please try again later.');
// }

}
