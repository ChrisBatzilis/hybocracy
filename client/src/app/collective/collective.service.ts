import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';


export interface Collective {
  id: number,
  name: string,
  desc: string
}

@Injectable()
export class CollectiveService {

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  cachedCollectives: Collective[] = [];

  constructor(private http: Http) { 
    this.updateCollectiveCache();
  }

  getCachedCollectives(): Collective[] {
    return this.cachedCollectives;
  }

  getCollectives(): Observable<any> { return this.http.get('/api/collectives'); }

  saveCollective(collective: Collective) {
   if (collective.id == null) {
     this.cachedCollectives.push(collective);
     this.http.post('/api/collectives', JSON.stringify(collective), this.options).subscribe((res) => { console.log('saved new res:', res)});
     this.updateCollectiveCache();
   } else {
     this.updateExistingColl(collective);
     this.http.post('/api/collectives/' + collective.id, JSON.stringify(collective), this.options).subscribe((res) => { console.log('saved edited res:', res)}); 
   }
  }

  updateExistingColl(collective: Collective) {
    let some = this.cachedCollectives.filter((col) => col.id == collective.id);
    if (some[0]) {
      some[0] = collective;
    }
  }

  updateCollectiveCache() {
    console.log('updates');
    this.getCollectives().subscribe((colls) => {
      this.cachedCollectives = colls.json();
    });
  }
}