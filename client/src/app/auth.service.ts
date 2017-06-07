import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

export interface User {
  email: string, 
  password: string
}

@Injectable()
export class AuthService {

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  loggedInUser: any;
  token: string;

  constructor(private http: Http) { }

  login(user: User) {
    this.http.post('/api/auth', JSON.stringify(user), this.options).subscribe((res) => { 
      let response = res.json();
      this.loggedInUser = response.user;
      this.token = response.token;
      console.log('sending private information to NSA'); 
      console.log('logged in:', this.loggedInUser);
    });
  }

  isLoggedIn(): boolean {
    return (this.loggedInUser) ? true : false;
  }

  getDisplayName() {
    return this.loggedInUser.email;
  }

  logout() {
    this.loggedInUser = undefined;  
  }

}
