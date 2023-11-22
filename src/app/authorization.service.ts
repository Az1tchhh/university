import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Token} from "./models/token";
import {UserInfo} from "./models/UserInfo";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  BASE_URL = 'http://127.0.0.1:8080'
  constructor(private client: HttpClient) { }

  login(email: string, password: string): Observable<Token>{
    return this.client.post<Token>(`${this.BASE_URL}/api/v1/auth/authentication`, {email, password}).pipe(
      catchError(this.handleError)
    );
  }
  getUser(email: string): Observable<UserInfo>{
    return this.client.get<UserInfo>(`${this.BASE_URL}/api/user/${email}`)
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      return throwError('An error occurred. Please try again later.');
    } else {
      if(error.error == null) {
        return throwError("Check credentials");
      } else if (error.error && error.error.email) {
        return throwError(error.error.email[0]);
      } else if (error.error && error.error.username) {
        // Handle username validation error
        return throwError(error.error.username[0]);
      } else {
        // Handle other types of errors (generic error message)
        return throwError('Something went wrong. Please try again later.');
      }
    }
  }
}
