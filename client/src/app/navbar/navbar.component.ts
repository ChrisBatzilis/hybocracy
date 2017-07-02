import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../auth.service';
import { RegisterDialogService } from './register.service';


@Component({
  selector: 'hybo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User

  constructor(private authService: AuthService, private registerDialogService: RegisterDialogService) { 
    this.user = { email: '', password: '', firstName: '', lastName: ''};
    console.log('nav' ,this.authService.loggedInUser);

  }

  ngOnInit() {}

  login() {
    this.authService.login(this.user);
    delete this.user.password 
  }

  openRegister() {
    this.registerDialogService.openRegistrationDialog().subscribe(res => {
      console.log('registration complete:', res) 
    });
  }

  logout() {
    this.authService.logout();
  }

  displayName() {
    return this.authService.getDisplayName()
  }

  loginStatus() {
    return this.authService.isLoggedIn();
  }

}

