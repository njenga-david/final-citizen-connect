import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addChat, AddChatResponse, Chat } from '../Models/Chat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private readonly BaseURL = "http://localhost:4000/chat/"
  retrievedToken = localStorage.getItem('token') as string;


  constructor(private http:HttpClient) { }

  
  addChat(newChat: addChat): Observable<AddChatResponse> {

    return this.http.post<AddChatResponse>(this.BaseURL, newChat, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }

  
  getAllChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.BaseURL, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    })
  }

}
