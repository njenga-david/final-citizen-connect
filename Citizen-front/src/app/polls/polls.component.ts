import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Poll {
  id: string;
  title: string;
  totalVotes: number;
  daysLeft: number;
}

@Component({
  selector: 'app-polls',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {
polls: any;

  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(route: string, id?: string): void {
    if (id) {
      this.router.navigate([route, id]);
    } else {
      this.router.navigate([route]);
    }
  }
}
