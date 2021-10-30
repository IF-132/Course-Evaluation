import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { RestorePasswordComponent } from './components/auth/restore-password/restore-password.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Course-Evaluation';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(RestorePasswordComponent)
  }
}

