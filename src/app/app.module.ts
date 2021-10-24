import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloPageComponent } from './components/hello-page/hello-page.component';
import { RegistComponent } from './components/auth/regist/regist.component';
import { LoginComponent } from './components/auth/regist/login/login.component';
import { TwoFAComponent } from './components/auth/regist/two-fa/two-fa.component';
import { angularMaterial } from './share/material/material';

@NgModule({
  declarations: [AppComponent, HelloPageComponent, RegistComponent, LoginComponent, TwoFAComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    angularMaterial

    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
