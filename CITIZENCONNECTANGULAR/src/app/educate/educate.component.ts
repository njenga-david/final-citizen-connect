import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-educate',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './educate.component.html',
  styleUrl: './educate.component.css'
})
export class EducateComponent implements OnInit {
  addChatForm!:FormGroup
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.addChatForm = this.fb.group({
      message: this.fb.control(null,Validators.required),
    });

  }

  onSubmit(): void {
    console.log("Add Chat Form Submitted")
    console.log(this.addChatForm.value)
  }

}
