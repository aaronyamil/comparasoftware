import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Software } from './software';

@Injectable({
  providedIn: 'root',
})
export class SoftService {
  private apiPath = 'http://dev.comparasoftware.com/platform/api/contents';
  // I need to add guard functionality here. The token is localstorage
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('key') || '',
    }),
  };

  constructor(private httpClient: HttpClient) {}
  // get software list from endpoint
  getList(first: number, last: number): Observable<Software[]> {
    return this.httpClient
      .get<any[]>(
        this.apiPath + `/software?page=${first}&limit=${last}`,
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }
  // create a new software data
  create(softForm): Observable<Software> {
    softForm.type = 'software';
    return this.httpClient
      .post<Software>(
        this.apiPath + '',
        JSON.stringify(softForm),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }
  // read one software data
  getById(id): Observable<Software> {
    return this.httpClient
      .get<Software>(this.apiPath + '/software/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  // update one software data
  update(id, Software): Observable<Software> {
    return this.httpClient
      .put<Software>(
        this.apiPath + '/software/' + id,
        JSON.stringify(Software),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }
  // delete one software data
  delete(id) {
    return this.httpClient
      .delete<Software>(this.apiPath + '/software/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  // error handler
  errorHandler(error) {
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
