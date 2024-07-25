import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, RegisterResponse, LogInRequest, LogInResponse, addUser } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly BaseURL = "http://localhost:4000/auth/";
  private retrievedToken = localStorage.getItem('token') as string;

  constructor(private http: HttpClient) { }

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

  approveOfficial(id: string): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(this.BaseURL + "approveofficial/" + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

  showStatus(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut(): boolean {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    return true;
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}
