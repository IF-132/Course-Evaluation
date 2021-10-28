import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestorePasswordComponent } from './components/auth/restore-password/restore-password.component';
import { angularMaterial } from './share/angularMaterial/material';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    RestorePasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    angularMaterial,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
