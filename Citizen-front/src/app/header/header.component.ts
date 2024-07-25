import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showNav = false;
  role: string | null = null;
auth: any;

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.role = this.authService.getRole();
  }

  toggle() {
    this.showNav = !this.showNav;
  }

  logoutUser() {
    this.authService.logOut();
    this.role = null; // Clear role after logout
  }
}
