import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { AuthActions } from '../State/Actions/auth.actions';
import { Observable } from 'rxjs';
import { IUser, addUser } from '../Models/User';
import { userSelector } from '../State/Selectors/auth.selector';

@Component({
  selector: 'app-single-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.css'
})
export class SingleUserComponent implements OnInit {

  userEditForm!: FormGroup
  roles = ['Government Official', 'Citizen']
  actions = ['Approve', 'Deny']
  user!: IUser
  userid!:string
  constructor(private fb: FormBuilder, private activateRoute: ActivatedRoute, private store: Store<AppState>) {

  }


  ngOnInit(): void {
    this.userEditForm = this.fb.group({
      username: this.fb.control(null, Validators.required),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      role: this.fb.control(null, Validators.required),
    })

    this.activateRoute.params.subscribe(params => {
      this.store.dispatch(AuthActions.getSpecificUser({ id: params['id'] }))
      this.store.select(userSelector).subscribe(retrievedUser => {
        if (retrievedUser) {
          this.user = retrievedUser
          this.userid = retrievedUser.id
          this.userEditForm.patchValue({
            username: this.user.username,
            email: this.user.email,
            role: this.user.role
          })
        }
      })

    })


  }

  onSubmit() {
    console.log("User Edit Form Submitted")
    const updatedUser: addUser = {
      username: this.userEditForm.value.username,
      email: this.userEditForm.value.email,
      password: this.user.password,
      role: this.userEditForm.value.role,
    }
    console.log(updatedUser)
    this.store.dispatch(AuthActions.updateUser({updatedUser,id: this.userid }))
  }


}
