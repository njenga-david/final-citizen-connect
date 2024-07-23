import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IView } from '../Models Angular/Views';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

    private readonly Base_URL = "http://localhost:1000/views/"

  constructor(private http:HttpClient) { }


  addView(newView:IView):Observable<IView>{
    return this.http.post<IView>(this.Base_URL + "add", newView)
  }
}
