import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  @ViewChild('d') d: ElementRef;
  @ViewChild('s') s: ElementRef;
  @ViewChild('nav') nav: ElementRef;
  constructor() {}

  ngOnInit(): void {
    console.log('Dashboard componennt is working');
  }

  handleToggleClassActive(el: any): void {
    const collection = [...this.nav.nativeElement.children];

    for (let item of collection) {
      item.classList.remove('field-active');
    }

    el.classList.add('field-active');
  }
}
