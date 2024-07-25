// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Router, RouterLink, RouterModule } from '@angular/router';
// import { AuthenticationService } from '../Services/authentication.service';
// import { Store } from '@ngrx/store';
// import { AppState } from '../State';
// import { AuthActions } from '../State/Actions/auth.actions';
// import { errorSelectorLI, successSelectorLI } from '../State/Selectors/auth.selector';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent implements OnInit {

//   constructor(private fb: FormBuilder,private authServ: AuthenticationService, private router: Router,private store:Store<AppState>) { }

//   loginerrorMessage$ =this.store.select(errorSelectorLI)
//   loginsuccessMessage$ =this.store.select(successSelectorLI)




//   loginForm!: FormGroup
//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       email: this.fb.control(null, [Validators.required, Validators.email]),
//       password: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')])
//     })

//   }

//   onSubmit() {

//     console.log("Login Form Submitted")
    
//     // send form data to server for authentication

//     this.store.dispatch(AuthActions.login({user:this.loginForm.value}))
//   }




// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { AuthActions } from '../State/Actions/auth.actions';
import { errorSelectorLI, successSelectorLI } from '../State/Selectors/auth.selector';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginerrorMessage$ = this.store.select(errorSelectorLI);
  loginsuccessMessage$ = this.store.select(successSelectorLI);

  constructor(
    private fb: FormBuilder,
    private authServ: AuthenticationService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')]]
    });

    // Subscribe to error and success messages
    this.loginerrorMessage$.subscribe(error => {
      if (error) {
        console.error("Login error:", error);
        // Display the error message to the user
      }
    });

    this.loginsuccessMessage$.subscribe(success => {
      if (success) {
        console.log("Login successful:", success);
        // Optionally, navigate to a different page or display a success message
        this.router.navigate(['/home']); // Example navigation
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Login Form Submitted");

      // Dispatch the login action with the form data
      this.store.dispatch(AuthActions.login({ user: this.loginForm.value }));
    } else {
      console.log("Form is invalid");
      // Optionally, display form validation errors to the user here
    }
  }

}
