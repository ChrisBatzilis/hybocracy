import { Injectable } from '@angular/core';

export interface User {
  email: string, 
  password: string
}

@Injectable()
export class AuthService {

  constructor() { }

  login(user: User) {
    console.log('login:', user);
  }

  logout() {
    console.log('logout'); 
  }

}
