import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent implements OnInit {

  constructor(private fb :FormBuilder) { }

  resetForm!: FormGroup
  ngOnInit(): void { 
    this.resetForm = this.fb.group({
      password: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')]),
      cpassword: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')])
    })
  }

  onSubmit() {

  }
}
