import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CollectiveService } from './collective.service';


export interface Collective {
  name: string,
  desc: string
}
@Component({
  selector: 'hybo-collective',
  templateUrl: './collective.component.html',
  styleUrls: ['./collective.component.css'],
  providers: [CollectiveService]
})
export class CollectiveComponent implements OnInit {

  collectives: any[];
  newColl: Collective = { name: '', desc: ''};

  constructor(private collectiveService: CollectiveService) { }

  ngOnInit() {
    this.collectiveService.getCollectives().subscribe((colls) => {
      this.collectives = colls.json();
    });
  }

  save() {
    this.collectives.push(this.newColl);
    this.collectiveService.saveCollective(this.newColl);
    this.newColl = { name: '', desc: ''};
  }

  cancel() {
    this.newColl = { name: '', desc: ''};
  }
}
