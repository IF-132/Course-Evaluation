import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './components/auth/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Course-Evaluation';
  constructor( private dialog:MatDialog) {

  }

  public openLogin():void {
    this.dialog.open(LoginComponent);
  }
}
