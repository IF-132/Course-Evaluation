import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloPageComponent } from './components/hello-page/hello-page.component';
import { RegistComponent } from './components/auth/regist/regist.component';
import { angularMaterial } from './share/material/material';
import { HttpClientModule } from '@angular/common/http';
import { EmailExistComponent } from './components/auth/regist/error/email-exist/email-exist.component';
import { EmailNotConfirmedComponent } from './components/auth/regist/error/email-not-confirmed/email-not-confirmed.component';
import { SuccessComponent } from './components/auth/regist/success/success.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloPageComponent,
    RegistComponent,
    EmailExistComponent,
    EmailNotConfirmedComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    angularMaterial,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
