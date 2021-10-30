import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './components/courses/courses.component';
import { angularMaterial, matProvider } from './shared/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseFormActionComponent } from './components/courses/course-form-action/course-form-action';

@NgModule({
  declarations: [AppComponent, CoursesComponent, CourseFormActionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    angularMaterial,
  ],
  providers: [matProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
