import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../auth.service';


@Component({
  selector: 'hybo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User

  constructor(private authService:AuthService) { 
    this.user = { email: '', password: '' };
  }

  ngOnInit() {}

  login() {
    this.authService.login(this.user);
    delete this.user.password 
  }

  logout() {
    this.authService.logout();
  }

  loginStatus() {
    return this.authService.isLoggedIn();
  }

}

