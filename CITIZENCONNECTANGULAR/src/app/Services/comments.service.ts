import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { addComment, AddCommentResponse, IComments } from '../Models Angular/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private readonly BaseURL = "http://localhost:1000/comments/"
  retrievedToken = localStorage.getItem('token') as string;

  constructor(private http: HttpClient) { }

  addComment(newComment: addComment): Observable<AddCommentResponse> {
    return this.http.post<AddCommentResponse>(this.BaseURL, newComment, {
      headers: new HttpHeaders({  
        token: this.retrievedToken
      })
    });
  }

  getAllComments(): Observable<IComments[]> {
    return this.http.get<IComments[]>(this.BaseURL, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    })
  }

}
