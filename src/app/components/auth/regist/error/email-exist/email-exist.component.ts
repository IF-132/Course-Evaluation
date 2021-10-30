import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-email-exist',
  templateUrl: './email-exist.component.html',
  styleUrls: ['./email-exist.component.scss'],
})
export class EmailExistComponent {
  constructor(private dialog: MatDialog) {}
}
