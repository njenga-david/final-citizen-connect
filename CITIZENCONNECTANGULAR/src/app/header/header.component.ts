import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{

  constructor(public authService: AuthenticationService) { }

  showNav = false;

  ngOnInit(): void {

  }

  toggle() {
    this.showNav =!this.showNav;
  }

  logoutUser(){
    this.authService.logOut()
  }


}
