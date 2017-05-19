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

  constructor(private http: Http) { }

  login(user: User) {
    console.log('login:', user);
    this.http.post('/api/auth', JSON.stringify(user), this.options).subscribe((res) => { 
      this.loggedInUser = res.json();
      console.log('logged in:', res.json());
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
