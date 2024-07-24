import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addMessage, AddMessageResponse, IMessage } from '../Models-Angular/Messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private readonly BaseURL = "http://localhost:1000/message/"
  retrievedToken = localStorage.getItem('token') as string;

  constructor(private http: HttpClient) { }

  addMessage(newMessage: addMessage): Observable<AddMessageResponse> {
    return this.http.post<AddMessageResponse>(this.BaseURL, newMessage, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    })
  }

  getAllMessages(): Observable<IMessage[]> {
    return this.http.get<IMessage[]>(this.BaseURL, {

      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    })
  }


}


