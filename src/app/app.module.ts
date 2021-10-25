import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { angularMaterial } from './share/material/material';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './components/dashboard/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    angularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
