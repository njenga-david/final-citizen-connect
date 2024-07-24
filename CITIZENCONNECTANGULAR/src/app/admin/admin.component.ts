import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { AuthActions } from '../State/Actions/auth.actions';
import { getAllUserSelector } from '../State/Selectors/auth.selector';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  constructor(private store: Store<AppState>){
    
  }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.get())
  }

  allUsers$ =this.store.select(getAllUserSelector)


  approveUser(id:string){
    console.log(id)
    this.store.dispatch(AuthActions.approveOffical({id:id}))
  }

  deleteUser(id:string){
    console.log(id)
    this.store.dispatch(AuthActions.deleteUser({id:id}))

  }
}
