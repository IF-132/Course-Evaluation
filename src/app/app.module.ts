import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './share/loader/interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './components/dashboard/courses/courses.component';
import { CourseFormActionComponent } from './components/dashboard/courses/course-form-action/course-form-action';
import { UserProfileComponent } from './components/dashboard/user-profile/user-profile.component';
import { UPDataComponent } from './components/dashboard/user-profile/u-p-data/u-p-data.component';
import { UPUpdateNameComponent } from './components/dashboard/user-profile/u-p-update-name/u-p-update-name.component';
import { UPUpdatePasswordComponent } from './components/dashboard/user-profile/u-p-update-password/u-p-update-password.component';
import { UPUpdatePictureComponent } from './components/dashboard/user-profile/u-p-update-picture/u-p-update-picture.component';

import { RestorePasswordComponent } from './components/auth/restore-password/restore-password.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { HelloPageComponent } from './components/hello-page/hello-page.component';
import { RegistComponent } from './components/auth/regist/regist.component';
import { EmailExistComponent } from './components/auth/regist/error/email-exist/email-exist.component';
import { EmailNotConfirmedComponent } from './components/auth/regist/error/email-not-confirmed/email-not-confirmed.component';
import { SuccessComponent } from './components/auth/regist/success/success.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TwoFAComponent } from './components/auth/two-fa/two-fa.component';
import { InvalidEmailPasswComponent } from './components/auth/login/errors/invalid-email-passw/invalid-email-passw.component';

import { angularMaterial, matProvider } from './share/angularMaterial/material';
import { CommonModule } from '@angular/common';
import { TokenExpiredComponent } from './components/auth/two-fa/errors/token-expired/token-expired.component';
import { InvalidConfirmCodeComponent } from './components/auth/two-fa/errors/invalid-confirm-code/invalid-confirm-code.component';
// import { AdminChatComponent } from './chat/admin-chat/admin-chat.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UPDataComponent,
    UPUpdateNameComponent,
    UPUpdatePasswordComponent,
    UPUpdatePictureComponent,
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
    DashboardComponent,
    TokenExpiredComponent,
    InvalidConfirmCodeComponent,
 //   CoursesComponent,
 //   CourseFormActionComponent,
   // CoursesComponent,
    //CourseFormActionComponent,
    // AdminChatComponent,
  ],
  entryComponents: [
    InvalidEmailPasswComponent,
    RestorePasswordComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule,
    angularMaterial,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ChatModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    angularMaterial,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    matProvider
  ],
  bootstrap: [AppComponent, BrowserAnimationsModule,
    AppComponent

  ],


})
export class AppModule { }
