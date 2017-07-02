
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

/*
@Component({
    selector: 'hb-register-dialog',
    template: `
        <p>{{ title }}</p>
        <p>{{ message }}</p>
        <form>
        username:
        <input type="text">
        </form>
        <button type="button" md-raised-button 
            (click)="dialogRef.close(true)">OK</button>
        <button type="button" md-button 
            (click)="dialogRef.close()">Cancel</button>
    `,
})
*/

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

    constructor(public dialogRef: MdDialogRef<RegisterDialog>) {}

    register() {
        console.log("register");
        this.dialogRef.close()
    }

    cancel() {
        this.dialogRef.close()    
    }
    
}