import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from '../dash/dash.component';
import { StudentsComponent } from '../students/students.component';



@NgModule({
  declarations: [

    DashComponent,
       StudentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
