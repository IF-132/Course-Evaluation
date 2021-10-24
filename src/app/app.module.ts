import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestorePasswordComponent } from './components/auth/restore-password/restore-password.component';
import { angularMaterial } from './share/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    RestorePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    angularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
