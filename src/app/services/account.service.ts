import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const baseUrl = `https://courseevaluator.herokuapp.com/api/v1/`

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private resetUrl = baseUrl + 'auth/restorePassword';
  private changeUrl = baseUrl + 'auth/changePassword';

  constructor(private http: HttpClient) {}

  public restorPassword(email: string): Observable<any> {
    return this.http.get(this.resetUrl + "?email="+ email);
  }

  
//   restorPassword(email: string) {
//     email = email.trim();
//     const options = { 
//       params: new HttpParams().set('email=', email)
//     };
//     return this.http.get(`${baseUrl}/restorePassword`, options)
    
// }

// private handleError(error: HttpErrorResponse) {
//   if (error.status === 500) {
//         console.error('An error occurred:', error.message);
//   } 
  
//   return throwError(
//     'Something bad happened; please try again later.');
// }

}
