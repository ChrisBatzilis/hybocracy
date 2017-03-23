import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Collective } from './collective.component';

@Injectable()
export class CollectiveService {

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });


  constructor(private http: Http) { }
  
  getCollectives(): Observable<any> { return this.http.get('/api/collectives'); }

  saveCollective(collective: Collective): void {
    console.log('save: col:', collective);
    this.http.post('/api/collectives', JSON.stringify(collective), this.options).subscribe((res) => { console.log('res:', res)});
  }
}