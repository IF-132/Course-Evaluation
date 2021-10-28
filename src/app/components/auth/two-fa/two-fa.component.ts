import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-two-fa',
  templateUrl: './two-fa.component.html',
  styleUrls: ['./two-fa.component.scss'],
})
export class TwoFAComponent implements OnInit {
  public qrCode = localStorage.getItem('qrCodeImage');
  public isDownloadApp = false;
  public showQrCodeStatus = true;
  public confirmCode = '';

  constructor() {}

  public twoForm: FormGroup | any;

  ngOnInit(): void {
    this.twoForm = new FormGroup({});
  }

  public hihi(event: string): void {
    this.confirmCode = event;
  }

  public confirmDownload(): void {
    this.isDownloadApp = true;
    this.showQrCodeStatus = false;
  }
}
