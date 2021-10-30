import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/auth/login/login.component';
import { TwoFAComponent } from './components/auth/two-fa/two-fa.component';
import { angularMaterial } from './share/angularMaterial/material';
import { InvalidEmailPasswComponent } from './components/auth/login/errors/invalid-email-passw/invalid-email-passw.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TwoFAComponent,
    InvalidEmailPasswComponent,
  ],
  entryComponents: [InvalidEmailPasswComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    angularMaterial,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
