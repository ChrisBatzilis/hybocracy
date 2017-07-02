import { Component, OnInit } from '@angular/core';
import { Member, MemberService } from './member.service';

@Component({
  selector: 'hybo-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [MemberService]
})
export class MemberComponent implements OnInit {

  newMember: Member

  constructor(private memberService: MemberService) { 
    this.resetMemberFields();
  }

  ngOnInit() {}

  save() {
    if (this.isValidNewMember()) {
      this.memberService.saveNewMember(this.newMember);
    }
  }

  isValidNewMember(): boolean {
    return (this.newMember.firstName.length > 1 && this.newMember.lastName.length > 1 && this.newMember.email.indexOf('@') > 1);
  }

  resetMemberFields() {
    this.newMember = { firstName: '', lastName: '', email: '', password: ''};
  }
}


