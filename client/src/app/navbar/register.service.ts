import { Observable } from 'rxjs/Rx';
import { RegisterDialog } from './register.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterDialogService {

    constructor(private dialog: MdDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MdDialogRef<RegisterDialog>;

        dialogRef = this.dialog.open(RegisterDialog);
        dialogRef.componentInstance.title = title;
        //dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }

    public openRegistrationDialog() {
    	let dialogRef: MdDialogRef<RegisterDialog>;

        dialogRef = this.dialog.open(RegisterDialog);
        dialogRef.componentInstance.title = 'Register';
        //dialogRef.componentInstance.message = 'heres the dialog';

        return dialogRef.afterClosed();
    }
}