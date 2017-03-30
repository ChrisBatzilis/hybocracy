import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CollectiveService, Collective } from './collective.service';

@Component({
  selector: 'hybo-collective',
  templateUrl: './collective.component.html',
  styleUrls: ['./collective.component.css'],
  providers: [CollectiveService]
})
export class CollectiveComponent {

  collective: Collective = { id: null, name: '', desc: ''};

  constructor(private collectiveService: CollectiveService) { }

  editCollective(coll: Collective) {
    this.collective = coll;
  }

  save() {
    this.collectiveService.saveCollective(this.collective);
    this.collective = { id: null, name: '', desc: ''};
  }

  cancel() {
    this.collective = { id: null,  name: '', desc: ''};
  }
}
