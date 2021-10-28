import { Component, OnInit } from '@angular/core';
import { TeacherStatDto } from 'src/app/share/models/TeacherStatDto';
import { TotalInfoService } from './total-info.service';
import { LoaderService } from 'src/app/share/loader/loader.service';

@Component({
  selector: 'app-total-info',
  templateUrl: './total-info.component.html',
  styleUrls: ['./total-info.component.scss']
})
export class TotalInfoComponent implements OnInit {
  // totalInfo$: Observable<TeacherStatDto>;
  totalInfo: TeacherStatDto;

  constructor(
    public loaderService: LoaderService,
    private tiService: TotalInfoService
  ) { }

  ngOnInit(): void {
    this.tiService.getAvilableCourses().subscribe(
      (data) => this.totalInfo = data[0]
    );
  }
}
