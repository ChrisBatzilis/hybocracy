import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'hybo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  version: any;

  constructor(private http: Http) {
    this.getVersion().subscribe(ver => {
      this.version = ver;
    })
  }

  getVersion(): Observable<any> {
    return this.http.get('/api/version').map(res => {
      return res.text();
    }, err => console.error('Err', err))
  }

}