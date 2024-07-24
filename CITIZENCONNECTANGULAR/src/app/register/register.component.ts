import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { addUser } from '../Models-Angular/User';

import { AuthenticationService } from '../Services/authentication.service';
import { AppState } from '../State';
import { AuthActions } from '../State/Actions/auth.actions';
import { Store } from '@ngrx/store';
import { errorSelectorRG, successSelectorRG } from '../State/Selectors/auth.selector';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup

  roles = ['Government Official', 'Citizen']

  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>) {

  }

  registererrorMessage$ = this.store.select(errorSelectorRG)
  registersuccessMessage$ = this.store.select(successSelectorRG)


  ngOnInit(): void {

    // Reactive form validation
    this.registerForm = this.fb.group({
      username: this.fb.control(null, Validators.required),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      terms: this.fb.control(false, Validators.requiredTrue),
      role: this.fb.control(null, Validators.required),
      password: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')])

    })

  }
  onSubmit() {
    console.log("Register Form Submitted")
    console.log(this.registerForm.value);
    // send form data to server for authentication

    const newUser: addUser = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      role: this.registerForm.value.role,
      password: this.registerForm.value.password
    }

    this.store.dispatch(AuthActions.register({ user: newUser }))
  }

}
