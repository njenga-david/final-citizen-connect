import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-single-poll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-poll.component.html',
  styleUrl: './single-poll.component.css'
})
export class SinglePollComponent {

  percentage1=50
  percentage2=30
  percentage3=20

}
