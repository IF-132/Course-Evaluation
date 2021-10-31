import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwoFAService } from './two-faService';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenExpiredComponent } from './errors/token-expired/token-expired.component';
import { InvalidConfirmCodeComponent } from './errors/invalid-confirm-code/invalid-confirm-code.component';

@Component({
  selector: 'app-two-fa',
  templateUrl: './two-fa.component.html',
  styleUrls: ['./two-fa.component.scss'],
})
export class TwoFAComponent implements OnInit {
  public qrCode:string;
  public isDownloadApp = false;
  public showQrCodeStatus = true;
  public authCode = '';
  private token: string | any;

  constructor(
    private router: Router,
    private twoFAservice: TwoFAService,
    private dialog: MatDialog,
    private popup2FARef: MatDialogRef<TwoFAComponent>
  ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.qrCode = this.twoFAservice.getQrCode();
  }

  public saveConfirmCode(event: string): void {
    this.authCode = event;
  }

  public confirmDownload(): void {
    this.isDownloadApp = true;
    this.showQrCodeStatus = false;
  }

  public confirm(): void {
    this.twoFAservice
      .confirmCode(this.authCode, this.token)
      .subscribe((response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['dashboard']);
        this.popup2FARef.close();
      },(error: HttpErrorResponse) => {
        if (error.error.error === "JwtAuthenticationException") {
          this.popup2FARef.close();
          this.dialog.open(TokenExpiredComponent);
        } if (error.error === "Invalid Code!") {
          this.dialog.open(InvalidConfirmCodeComponent);
        }
        console.log(error);
      });
  }
}
