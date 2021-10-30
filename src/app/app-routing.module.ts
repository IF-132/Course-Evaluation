import { NgModule } from '@angular/core';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashComponent } from './components/dashboard/dash/dash.component';
import { StudentsComponent } from './components/dashboard/students/students.component';
import { CoursesComponent } from './components/dashboard/courses/courses.component';
 import { UserProfileComponent } from './components/dashboard/user-profile/user-profile.component';
import { HelloPageComponent } from './components/hello-page/hello-page.component';

const routes: Routes = [
  {
     path: '', component: HelloPageComponent  },
   { path: "dashboard", component: DashboardComponent ,
    children: [
      {path: "", component: DashComponent},
      {path: "courses", component: CoursesComponent},
      {path: "students", component: StudentsComponent},
      {path: "user-profile", component: UserProfileComponent}
    ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
