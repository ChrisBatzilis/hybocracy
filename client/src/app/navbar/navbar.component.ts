import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../auth.service';


@Component({
  selector: 'hybo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User
  loggerInUser: any
   
  constructor(private authService:AuthService) { 
    this.user = { email: '', password: '' };
  }

  ngOnInit() {}

  login() {
    this.authService.login(this.user);
  }

}

