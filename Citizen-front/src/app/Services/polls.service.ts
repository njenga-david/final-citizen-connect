import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addPoll, AddPollResponse, Poll } from '../Models/Poll';
import { Observable } from 'rxjs/internal/Observable';
import { addVote, AddVoteResponse } from '../Models/Votes';
import { addChoice } from '../Models/Choices';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  private readonly BaseURL = "http://localhost:4000/polls/"
  retrievedToken = localStorage.getItem('token') as string;


  constructor(private http:HttpClient) { }

  addPoll(newPoll: addPoll): Observable<AddPollResponse> {
    return this.http.post<AddPollResponse>(this.BaseURL+ "addpoll" , newPoll, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    });
  }


  getAllPolls():Observable<Poll[]>{
    return this.http.get<Poll[]>(this.BaseURL, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    })
  }

  getSpecificPoll(id:string):Observable<Poll>{
    return this.http.get<Poll>(this.BaseURL + id, {
      headers: new HttpHeaders({
        token: this.retrievedToken
      })
    })
  }


  addVote (newVote:addVote): Observable<AddVoteResponse> {
    return this.http.post<AddVoteResponse>(this.BaseURL + "addvote", newVote, {
      headers: new HttpHeaders({
        token: this.retrievedToken  
      })
    })

  }

  
}
