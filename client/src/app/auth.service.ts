import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

export class User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Injectable()
export class AuthService {

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  loggedInUser: any;
  token: string;

  constructor(private http: Http) { 
          // set token if saved in local storage
    let userInfoInStorage = JSON.parse(localStorage.getItem('currentUser'));
    this.loggedInUser = userInfoInStorage && userInfoInStorage.user;
    this.token = userInfoInStorage && userInfoInStorage.token;
  }

  login(user: User) {
    this.loginObservable(user).subscribe(); // needs at least one subscribe for it to be called
  }

  loginObservable(user: User): Observable<boolean> {
    return this.http.post('/api/auth', JSON.stringify(user), this.options).map((response: Response) => {
      // login successful if there's a jwt token in the response
      let resJson = response.json();
      let token = resJson && resJson.token;
      if (token) {
        // set token property
        this.token = token;
        this.loggedInUser = resJson.user;

        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(resJson));
        // return true to indicate successful login
        return true;
      } else {
        // return false to indicate failed login
        return false;
      }
    });
  }
 
  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
    this.loggedInUser = undefined;  
  }

  isLoggedIn(): boolean {
    return (this.loggedInUser) ? true : false;
  }

  getDisplayName() {
    return this.loggedInUser.email;
  }
}
