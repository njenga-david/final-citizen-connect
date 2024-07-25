import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-poll',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './single-poll.component.html',
  styleUrl: './single-poll.component.css'
})
export class SinglePollComponent {
onVote() {
throw new Error('Method not implemented.');
}

  percentage1=50
  percentage2=30
  percentage3=20
voteForm: any;
voteResults: any;

}
