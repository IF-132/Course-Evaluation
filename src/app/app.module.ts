import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { angularMaterial } from './share/angularMaterial/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './components/dashboard/user-profile/user-profile.component';
import { UPDataComponent } from './components/dashboard/user-profile/u-p-data/u-p-data.component';
import { UPUpdateNameComponent } from './components/dashboard/user-profile/u-p-update-name/u-p-update-name.component';
import { UPUpdatePasswordComponent } from './components/dashboard/user-profile/u-p-update-password/u-p-update-password.component';
import { UPUpdatePictureComponent } from './components/dashboard/user-profile/u-p-update-picture/u-p-update-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UPDataComponent,
    UPUpdateNameComponent,
    UPUpdatePasswordComponent,
    UPUpdatePictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    angularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
