import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent  implements OnInit{

  constructor(){

  }

  ngOnInit(): void {
   
  }

  currentPage = 0;
  totalPages = 10; // Replace with the actual total number of pages

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }


}
