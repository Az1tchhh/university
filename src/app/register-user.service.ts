import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserEdit} from "./models/UserEdit";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  BASE_URL = 'http://127.0.0.1:8080'
  constructor(private client: HttpClient) { }

  registerStudent(userEdit: UserEdit): Observable<UserEdit>{
    const authToken = localStorage.getItem('token');

    // Добавьте токен в заголовки запроса
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
      'Access-Control-Allow-Origin': 'http://127.0.0.1:4200', // Replace with your Angular app's origin
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    });
    return this.client.post<UserEdit>(`${this.BASE_URL}/api/v1/admin/student/new`, {
      "firstName":userEdit.firstName,
      "lastName":userEdit.lastName,
      "email":userEdit.email,
      "password":userEdit.password,
      "role":"USER",
      "department":userEdit.department,
      "program":userEdit.program,
      "yearOfSubmission":userEdit.yearOfSubmission,
      "dateOfBirth":userEdit.dateOfBirth,
      "idNo":userEdit.idNo,
      "permanentAddress":userEdit.permanentAddress,
      "phone":userEdit.phone,
      "nationality":userEdit.nationality
    }, {headers});

  }
}
