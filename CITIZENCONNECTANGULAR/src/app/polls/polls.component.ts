import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-polls',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.css'
})
export class PollsComponent {

}
