import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestorePasswordComponent } from './components/auth/restore-password/restore-password.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { HelloPageComponent } from './components/hello-page/hello-page.component';
import { RegistComponent } from './components/auth/regist/regist.component';
import { angularMaterial } from './share/material/material';
import { EmailExistComponent } from './components/auth/regist/error/email-exist/email-exist.component';
import { EmailNotConfirmedComponent } from './components/auth/regist/error/email-not-confirmed/email-not-confirmed.component';
import { SuccessComponent } from './components/auth/regist/success/success.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TwoFAComponent } from './components/auth/two-fa/two-fa.component';
import { InvalidEmailPasswComponent } from './components/auth/login/errors/invalid-email-passw/invalid-email-passw.component';

@NgModule({
  declarations: [
    AppComponent,
    RestorePasswordComponent,
    ChangePasswordComponent,
    RestorePasswordComponent,
    ChangePasswordComponent,
    HelloPageComponent,
    RegistComponent,
    EmailExistComponent,
    EmailNotConfirmedComponent,
    SuccessComponent,
    LoginComponent,
    TwoFAComponent,
    InvalidEmailPasswComponent,
  ],
  entryComponents: [InvalidEmailPasswComponent,
    RestorePasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    angularMaterial,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

