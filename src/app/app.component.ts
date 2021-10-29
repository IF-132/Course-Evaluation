import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistComponent } from './components/auth/regist/regist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Course-Evaluation';

  // TODO:  atribute "show" must be 'false' for unregistered user!
  public registered = false;

  constructor(
    private dialog: MatDialog
    ) { }

  public openDialog():void { 
    this.dialog.open(RegistComponent); 
  }
}
