import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { ViewActions } from '../State/Actions/views.action';

@Component({
  selector: 'app-add-view',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-view.component.html',
  styleUrls: ['./add-view.component.css']
})
export class AddViewComponent implements OnInit {
  addViewForm!: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.addViewForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addViewForm.valid) {
      console.log("Add View Form Submitted");
      console.log(this.addViewForm.value);
      this.store.dispatch(ViewActions.addView({ newView: this.addViewForm.value }));

      // Display the success message and reset the form
      this.successMessage = 'View added successfully!';
      this.addViewForm.reset();

      // Optionally, hide the success message after a few seconds
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    }
  }
}
