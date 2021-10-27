import { NgModule } from '@angular/core';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { StudentsComponent } from './dashboard/students/students.component';
import { CoursesComponent } from './dashboard/courses/courses.component';

const routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      {path: "", component: DashComponent},
      {path: "courses", component: CoursesComponent},
      {path: "students", component: StudentsComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
