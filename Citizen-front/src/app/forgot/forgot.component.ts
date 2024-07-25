import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink,ReactiveFormsModule],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  forgotForm!: FormGroup
  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email])
    })
  }
  onSubmit() {

    console.log("Forgot Password Form Submitted")
    console.log(this.forgotForm.value);
    // send form data to server for authentication
  }

}
