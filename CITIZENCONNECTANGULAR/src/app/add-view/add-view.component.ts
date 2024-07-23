import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-view',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink,ReactiveFormsModule],
  templateUrl: './add-view.component.html',
  styleUrl: './add-view.component.css'
})
export class AddViewComponent implements OnInit {

  addViewForm!: FormGroup

  constructor(private fb:FormBuilder) {

  }

  ngOnInit(): void {
    this.addViewForm = this.fb.group({
      title: this.fb.control(null,Validators.required),
      description: this.fb.control(null, Validators.required),
    });

  }

  onSubmit(){
    console.log("Add View Form Submited")
    console.log(this.addViewForm.value)

  }
}
