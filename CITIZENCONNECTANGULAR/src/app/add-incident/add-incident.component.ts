import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-incident',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-incident.component.html',
  styleUrl: './add-incident.component.css'
})
export class AddIncidentComponent  implements OnInit{

  addIncidentForm!: FormGroup;

  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.addIncidentForm = this.fb.group({
      title: this.fb.control(null, Validators.required),
      description: this.fb.control(null, Validators.required),
      location: this.fb.control(null, Validators.required),
      multimediapath: this.fb.control(null, Validators.required),

    });

   
  }

  onSubmit(){
    console.log("Add Incident Form Submitted")
    console.log(this.addIncidentForm.value)

  }


}
