
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";
import { Observable } from "rxjs";
import { jwtDecodeUser } from "src/app/share/models/jwtDecodeUser";

@Injectable({
    providedIn: 'root',
  })

export class TwoFAService{
    private userInfo:jwtDecodeUser;
    private httpOptions = {
          'Content-Type':  'application/json',
          'Authorization': ''
      };

    constructor(private http: HttpClient) {   
    }
    
    public getQrCode() :string {
      let qrCodelink = localStorage.getItem('qrCode');
      if (qrCodelink === null || qrCodelink === undefined) {
        qrCodelink = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAFeAQAAAADlUEq3AAACsklEQVR42u2bQW7FMAhEkThAjuSr+0g5gCUXZiA/dVupa+Moqtz4JQtkGMD+Mv9/DTnwgQ984AMfeEdY/Grj6nL1ceGJjUVsrLfPaSXYx3fj7MCbxvj01e15AHXg22btodktTAczugHxkVYQtlkjYbc2b3G7za5VYZvyGytKsKLiI9XgcKtmgA0Ur8N0828f3BZmyDUr/Xb/Hp83huPKWXUBcnMZ9qd27wtTcQQR5u1WNkYQ7qVgSo/Sg16x1557uvI9yFSAXXHEdUcNkBYkxGjEcqoCe4JqyhtYiyceezsy2FYKVtoNy4lpiVKa8RaTtzowHYdulSnr5Ot8rpVgyeiKqDIRcB63ksWttocjMfO/k+mrwIDMWqUYLFHYph9RcfCFIW3V7t3hgdpWrgwytBXFCP0QrQQLhHhkhpYyZHYTmHHJ6zaHNSKMizJXFFtDzNkYikvBr0z+lcaz+rt6KfiRY/YJUeJ1wJ2FnpaCUdFEjop2EM04ozW0pPGbw1Hs+2yjGbmWJMdaCUY5E9dEL0iQpYx0sVkJnlhFOqMdxPAbGsQ8thKsUBzeNBpdiVq8Zrm7w/QsOpFmGk8S+cnaRN0bRmu9ocrj+snkLcu9anCG1j7vT5ZCS/403eYwlfcRo9sDL0Mud7FnJTibyYLAG7GX/1KDtBKcG7W+ctgzpNHms21XCkb5P57y/4oIHNuUS9twdzhXUUzxkAMNSGPOSjCDavZLwdyUIW+GjGVvYncYqVpjh/CTuiev6+7/5vB8iXKW/5G1UpFLwTzewGNy83PcJbYpV+3eHabF2CFMF4t36W614KcdlMcbFKXu0wrQevDruEtnHKYMyY8d3hpwbN/zznKG0lwJziNzPAvEM7fynHBY5XhzOENuANySi8OE97rdsD18foNw4AMf+MAHrgl/AbbvIZ6buhRQAAAAAElFTkSuQmCC';
      }
      return qrCodelink;
    }
    public confirmCode(code:string, token:string):Observable<any> {
        this.userInfo = jwtDecode(token);
        this.httpOptions.Authorization = token;
        return this.http.post(`https://courseevaluator-main.herokuapp.com/api/v1/auth/verify?code=${code}&email=${this.userInfo.sub}`,"", {'headers': this.httpOptions});
    }
}