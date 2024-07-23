import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, RegisterResponse, LogInRequest, LogInResponse } from '../Models Angular/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly Base_URL = "http://localhost:1000/auth/"
  retrievedToken = localStorage.getItem('token') as string

  constructor(private http: HttpClient) {

  }

  registerUser(newUser: IUser): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.Base_URL + "signup", newUser);
  }

  loginUser(userCredentials: LogInRequest): Observable<LogInResponse> {
    return this.http.post<LogInResponse>(this.Base_URL + "signin", userCredentials);
  }

  showStatus() {
    const token = localStorage.getItem('token') as string
    if (token) {
    
      return true
    }

    return false
  }

  signOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    return true;
  }

  getSpecificUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(this.Base_URL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }
}
