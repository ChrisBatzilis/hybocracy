import { Component, OnInit } from '@angular/core';

interface User {
  email: string, 
  password: string
}

@Component({
  selector: 'hybo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User
  constructor() { 
    this.user = { email: '', password: '' };
  }

  ngOnInit() {}

  login() {
    console.log('login'); 
  }

}

