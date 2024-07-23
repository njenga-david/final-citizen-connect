import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-incidents',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './incidents.component.html',
  styleUrl: './incidents.component.css'
})
export class IncidentsComponent {
 imagePath: string= 'https://images.unsplash.com/photo-1560956737-3428333ba83f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5jaWRlbnR8ZW58MHx8MHx8fDA%3D'

  constructor(){

  }

 


}
