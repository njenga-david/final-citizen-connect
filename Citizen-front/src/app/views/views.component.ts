import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { ViewActions } from '../State/Actions/views.action';
import { getAllViewsSelector } from '../State/Selectors/views.selector';
import { ShortenDescriptionPipe } from '../ShortenDescription/shorten-description.pipe';
import { AuthActions } from '../State/Actions/auth.actions';
import { userSelector } from '../State/Selectors/auth.selector';
import { Observable, Subscribable } from 'rxjs';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink,ShortenDescriptionPipe],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent  implements OnInit{
incidents$: Observable<undefined> | Subscribable<undefined> | Promise<undefined> | undefined;
getReporterName(arg0: any) {
throw new Error('Method not implemented.');
}
viewIncidentDetails(arg0: any) {
throw new Error('Method not implemented.');
}
isAdmin: any;
resolveIncident(arg0: any) {
throw new Error('Method not implemented.');
}
deleteIncident(arg0: any) {
throw new Error('Method not implemented.');
}

  constructor(private store:Store<AppState>){

  }

  ngOnInit(): void {

    this.store.dispatch(ViewActions.get())
  
  }


  allViews$ =this.store.select(getAllViewsSelector)

  getUserName(id:string){
    let username!:string
    // get user's name from the database or API based on the provided id
    this.store.dispatch(AuthActions.getSpecificUser({ id: id }))
    this.store.select(userSelector).subscribe(retrievedUser => {
      if (retrievedUser) {
      
        username= retrievedUser.username
      }
    })

    return username
  }

  currentPage = 0;
  totalPages = 10; // Replace with the actual total number of pages

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }


}
