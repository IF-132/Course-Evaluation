import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Course-Evaluation';

  // TODO:  atribute "show" must be 'false' for unregistered user!
  public registered = false;
}
