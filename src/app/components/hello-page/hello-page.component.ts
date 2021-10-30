import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistComponent } from '../auth/regist/regist.component';

@Component({
  selector: 'app-hello-page',
  templateUrl: './hello-page.component.html',
  styleUrls: ['./hello-page.component.scss'],
})
export class HelloPageComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('');
  }

  public openDialog(): void {
    this.dialog.open(RegistComponent);
  }
}
