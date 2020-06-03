import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoginUser } from './login-user';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private apiPath = 'http://dev.comparasoftware.com/platform/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  // use the login endpoint
  login(user): Observable<LoginUser> {
    return this.httpClient
      .post<LoginUser>(
        this.apiPath + 'login',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }
  // error handler
  private errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
