import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloPageComponent } from './components/hello-page/hello-page.component';

const routes: Routes = [
  {path: '', component: HelloPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
