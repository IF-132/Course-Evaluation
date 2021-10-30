import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwoFAService } from './two-faService';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-two-fa',
  templateUrl: './two-fa.component.html',
  styleUrls: ['./two-fa.component.scss']
})

export class TwoFAComponent implements OnInit {
  public qrCode = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAFeAQAAAADlUEq3AAACu0lEQVR42u2bQa7kMAhEkXyAHClXz5FyAEsMVEEy7e6RZg22ssh3XnqBDBSQL/r/a8qGN7zhDW94wxVh8XXKoeOWoZdf92mXPbIdW6MT7Pd4ZPtqT4/LLuxf3O8Fm8Vs0/fNbrZ7TvD+yn2aVRvC81A/Trb8RgZsOBrDbj360e0nivvtYLiVwRP7w/0L76a7tYIZchlmv67f8bkwzMWoMvEI+ejys/SP3F0YZjBRGCpsBW/6fZCqw35gkHqMdOeCASfDr4RKaQS7iUTxCiyGExXKTZmj+8DqFrsQTEyhmd3OsCde10/T1YdhMfF0TM0mwJQ5eiymqw67H0WcEeTlCw4l2JTFdOVhdyUwdKU8VDpTuLaCYT0Fc0qYy6/pkt7DbyuYuYaBZTLpIBGbQ1G+jlZwKnZBSKGj+dH6EGxdYI1cE3oVjP8CWyKwYSOYIoQCPgyIUAPB9tUoqw4LM84RpW52ES+62/gqamrDPCq0GCMM+Zn3rWBg7lk0V+g0SFZ2AEYn+GkHabY+hOIt6z7tBEusKPHYNuToISudTvCBuiY6yWgFuE6L4zQXldsAztY6ZOr9NECU04dWMHMQ5iyS9S9qPf/zh+avDc+MtDOTDsUJTtHqVuVhxpOMsTGSe1rr44dwLQ1Hr0x5cqjhWQKztGkFk2SkZT6iUFFactV1xWEOKD3woqyblPTZZF6GL/Vh7xDqo1rxLtNQDGJawZox9mmJ8GJv2QNOJ3hmaM1eUBiQ07ploF8eZnjBDO4dU/41v/5Mx9VhfUe3DCyvGaPy7QRH6+OBoWBDq8CAreD4ZA4ficXnDVQmUf6fveD8/OlpFfJDIHbJljFlE5gaXqPwv/QdUKr2g6FMhLMGljasfFe3Kg+/moQlnmrGGXl77F3g95M5tA1npmNOXr4G+sXh/T8IG97whje84Z7wH7BD3x2Rft7cAAAAAElFTkSuQmCC";
  public isDownloadApp = false;
  public showQrCodeStatus = true;
  public authCode = "";
  private token: string | any;

  constructor(private router: Router, private twoFAservice: TwoFAService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

  public saveConfirmCode(event:string):void {
    this.authCode = event;
  }

  public confirmDownload():void {
    this.isDownloadApp = true;
    this.showQrCodeStatus = false;
  }

  public confirm():void {
    this.twoFAservice.confirmCode(this.authCode, this.token).subscribe(response => {
      localStorage.setItem('token', response.token);
    })
  }

}
