import {
  Component,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  {
  @ViewChild('dash') dash: ElementRef;
  @ViewChild('students') s: ElementRef;
  @ViewChild('courses') courses: ElementRef;
  @ViewChild('nav') nav: ElementRef;
  @ViewChild('asideMenu') asideMenu: ElementRef;
  @ViewChild('burger') burger: ElementRef;

  constructor() {}

  handleToggleClassActive(el: any): void {
    const collection = [...this.nav.nativeElement.children];

    for (let item of collection) {
      item.classList.remove('field-active');
    }

    this.handleToggleMenu();
    el.classList.add('field-active');
  }

  handleToggleMenu(): void {
    if (!this.asideMenu.nativeElement.classList.contains('active')) {
      this.asideMenu.nativeElement.classList.add('active');
    } else {
      this.asideMenu.nativeElement.classList.remove('active');
    }

    if (!this.burger.nativeElement.classList.contains('active')) {
      this.burger.nativeElement.classList.add('active');
    } else {
      this.burger.nativeElement.classList.remove('active');
    }
  }
}
