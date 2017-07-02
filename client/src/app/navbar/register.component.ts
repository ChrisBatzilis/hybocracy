import { Observable } from 'rxjs';
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
//import { MemberService } from '../member/member.service'; 
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'hb-register-dialog',
  templateUrl: './register.component.html'
})
export class RegisterDialog {

    public user:any = {
        email: '',
        password: '',
        passwordConfirm: '',
        firstName: '',
        lastName: ''
    }
    public title: string;

    constructor(public dialogRef: MdDialogRef<RegisterDialog>, private authService: AuthService) {}

    private validateUser(): boolean {
        if (this.user.firstName.length > 1 &&
            this.user.lastName.length > 1 &&
            this.user.email.indexOf('@') > 1 && 
            this.user.password.length > 4 &&
            this.user.password == this.user.passwordConfirm) {
            console.log('is valid:');
            return true;    
        } else {
            return false;
        }
    }

    register() {
        if (this.validateUser()) {
            this.authService.registerNewUser(this.user).subscribe(res => {
                console.log('got response', res);
                if (res) {
                    this.dialogRef.close()    
                } else {
                    console.log('failed to create new user');
                }
            });
        }
    }

    cancel() {
        this.dialogRef.close()    
    }
}