import { RegisterDialogService } from './register.service';
import { MdDialogModule, MdButtonModule  } from '@angular/material';
import { NgModule } from '@angular/core';
import { RegisterDialog }   from './register.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MemberService } from '../member/member.service'; 

@NgModule({
    imports: [
        MdDialogModule,
        MdButtonModule,
        MaterialModule,
        FormsModule
    ],
    exports: [
        RegisterDialog,
    ],
    declarations: [
        RegisterDialog
        //MemberService
    ],
    providers: [
        RegisterDialogService,
    ],
    entryComponents: [
        RegisterDialog,
    ]
})
export class DialogsModule { }