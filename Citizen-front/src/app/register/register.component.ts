import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { addUser } from '../Models/User';
import { AuthenticationService } from '../Services/authentication.service';
import { AppState } from '../State';
import { AuthActions } from '../State/Actions/auth.actions';
import { Store } from '@ngrx/store';
import { errorSelectorRG, successSelectorRG } from '../State/Selectors/auth.selector';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Changed from styleUrl to styleUrls
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  roles = ['Government Official', 'Citizen'];

  registererrorMessage$!: Observable<string>;
  registersuccessMessage$!: Observable<string>;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    // Reactive form validation
    this.registerForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      terms: [false, Validators.requiredTrue],
      role: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')]]
    });

    // Initialize observables
    this.registererrorMessage$ = this.store.select(errorSelectorRG);
    this.registersuccessMessage$ = this.store.select(successSelectorRG);

    // Subscribe to success action
    this.registersuccessMessage$.pipe(
      tap(successMessage => {
        if (successMessage) {
          this.router.navigate(['/login']);
        }
      })
    ).subscribe();
  }

  onSubmit(): void {
    console.log("Register Form Submitted");
    console.log(this.registerForm.value);

    // Send form data to server for authentication
    const newUser: addUser = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      role: this.registerForm.value.role,
      password: this.registerForm.value.password
    };

    this.store.dispatch(AuthActions.register({ user: newUser }));
  }
}
