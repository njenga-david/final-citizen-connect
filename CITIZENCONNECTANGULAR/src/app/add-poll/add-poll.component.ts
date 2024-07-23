import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-poll',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-poll.component.html',
  styleUrl: './add-poll.component.css'
})
export class AddPollComponent implements OnInit {

  constructor(private fb: FormBuilder) {

  }
  addPollForm!: FormGroup

  ngOnInit(): void {
    this.addPollForm = this.fb.group({
      question: this.fb.control(null, Validators.required),
      responses: this.fb.array([
        this.fb.control(null, Validators.required)
      ]),
      startdate: this.fb.control(null, Validators.required),
      enddate: this.fb.control(null, Validators.required)
    });

  }

  onSubmit() {
    console.log("Add Poll Form Submitted");
  
    console.log(this.addPollForm.value);
    this.addPollForm.reset();

  }

  addResponse() {
    (<FormArray>this.addPollForm.get('responses')).push(this.fb.control(null, Validators.required));
  }

  getControls() {
    return (<FormArray>this.addPollForm.get('responses')).controls;

  }



}
