import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CollectiveComponent } from './collective/collective.component';
import { MemberComponent } from './member/member.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth.service';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CollectiveComponent,
    MemberComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
