import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { AuthActions } from '../State/Actions/auth.actions';
import { errorSelectorLI, successSelectorLI } from '../State/Selectors/auth.selector';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private authServ: AuthenticationService, private router: Router,private store:Store<AppState>) { }

  loginerrorMessage$ =this.store.select(errorSelectorLI)
  loginsuccessMessage$ =this.store.select(successSelectorLI)




  loginForm!: FormGroup
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')])
    })

  }

  onSubmit() {

    console.log("Login Form Submitted")
    console.log(this.loginForm.value);
    // send form data to server for authentication

    this.store.dispatch(AuthActions.login({user:this.loginForm.value}))
  }




}
