import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule }   from '@angular/forms';

interface Collective {
  name: string,
  desc: string
}
@Component({
  selector: 'hybo-collective',
  templateUrl: './collective.component.html',
  styleUrls: ['./collective.component.css']
})
export class CollectiveComponent implements OnInit {

  collectives: any[];
  newColl: Collective = { name: '', desc: ''};

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/api/collectives').subscribe((colls) => {
      this.collectives = colls.json();
    });
  }

  save() {
    console.log('save: ', this.newColl);
  }

  cancel() {
    this.newColl = { name: '', desc: ''};
  }
}
