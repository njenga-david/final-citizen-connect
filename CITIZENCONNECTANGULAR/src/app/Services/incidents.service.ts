import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addIncident as addIncident, IIncident } from '../Models-Angular/Incidents';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  private readonly BaseURL = "http://localhost:1000/incidents/"
  retrievedToken = localStorage.getItem('token') as string;

  constructor(private http: HttpClient) { }


  adddIncident(newIncident: addIncident): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.BaseURL, newIncident, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

  getAllIncidents(): Observable<IIncident[]> {
    return this.http.get<IIncident[]>(this.BaseURL, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    })
  }

  getSpecificIncidentById(id: string): Observable<IIncident> {
    return this.http.get<IIncident>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    })
  }

  updateIncident(id: string, newIncident: addIncident): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(this.BaseURL + id, newIncident, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    })
  }

  deleteIncident(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    })
  }


}
