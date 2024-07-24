import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, RegisterResponse, LogInRequest, LogInResponse, addUser } from '../Models-Angular/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly BaseURL = "http://localhost:1000/auth/"
  retrievedToken = localStorage.getItem('token') as string

  constructor(private http: HttpClient) {

  }

  registerUser(newUser: addUser): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.BaseURL + "register", newUser);
  }

  loginUser(userCredentials: LogInRequest): Observable<LogInResponse> {
    return this.http.post<LogInResponse>(this.BaseURL + "login", userCredentials);
  }

  getSpecificUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.BaseURL, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

  updateUser(updatedUser: addUser, id: string): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(this.BaseURL + id, updatedUser, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

  deleteUser(id:string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }


  approveOfficial(id: string):Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(this.BaseURL + "approveofficial/"+id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }



  showStatus() {
    const token = localStorage.getItem('token') as string
    if (token) {

      return true
    }

    return false
  }

  logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    return true;
  }



}
