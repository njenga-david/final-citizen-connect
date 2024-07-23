import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-user',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.css'
})
export class SingleUserComponent  implements OnInit{


  userEditForm!:FormGroup

  roles= ['Government Official','Citizen']
  actions= ['Approve','Deny']

  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.userEditForm =this.fb.group({
      username: this.fb.control(null, Validators.required),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      role: this.fb.control(null, Validators.required),
      action: this.fb.control(null, Validators.required),

    })
  
  
  }

  onSubmit(){
    console.log("User Edit Form Submitted")
    console.log(this.userEditForm.value);
  }


}
