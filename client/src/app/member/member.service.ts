import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

export interface Member {
  firstName: string,
  lastName: string,
  email: string
}

@Injectable()
export class MemberService {

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }

  saveNewMember(member: Member) {
    this.http.post('/api/members', JSON.stringify(member), this.options).subscribe((res) => { console.log('saved new member:', res)});
  }

}


