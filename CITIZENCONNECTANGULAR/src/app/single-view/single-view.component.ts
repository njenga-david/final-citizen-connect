import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-view',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './single-view.component.html',
  styleUrl: './single-view.component.css'
})
export class SingleViewComponent implements OnInit {
 
 comments =[
  {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
   {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
  {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
   {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
  {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
   {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
  {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
   {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
  {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
   {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
  {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
   {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
  {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
   {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
  {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },
   {
    author: 'John Doe',
    date: '2022-01-01',
    time:'10:40 AM',
    content: 'This is a great post!'
  },
  {
    author: 'Jane Smith',
    date: '2022-01-02',
    time:'11:30 AM',
    content: 'I disagree with John.'
   
  },
  {
    author: 'Alice Johnson',
    date: '2022-01-03',
    time:'12:15 PM',
    content: 'Thank you for the feedback!'
  },




 ]

 addCommentForm!: FormGroup
constructor(private fb:FormBuilder){

}
  ngOnInit(): void {
    this.addCommentForm = this.fb.group({
      comment: [null, Validators.required]
    })
    
  }

  onSubmit(){
    console.log("Add Comment Form Submitted")
    console.log(this.addCommentForm.value)
  }



}
