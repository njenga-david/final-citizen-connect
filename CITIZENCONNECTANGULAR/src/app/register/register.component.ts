import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup

  roles= ['Government Official','Citizen']

  constructor(private fb: FormBuilder) { }
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
    console.log(this.registerForm);
    // send form data to server for authentication

    


  }

}
