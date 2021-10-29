import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { getInstanceByDom, connect, EChartsOption } from 'echarts';
import { mockTechersData } from './mockTeachersData';

@Component({
  selector: 'app-teacher-rating',
  templateUrl: './teacher-rating.component.html',
  styleUrls: ['./teacher-rating.component.scss'],
})
export class TeacherRatingComponent  {
  @ViewChild('chart') chart: ElementRef;
  name: string[] = mockTechersData.map((n) => n.name);
  grade: number[] = mockTechersData.map((g) => g.grade);

  options: EChartsOption = {
    title: {
          text: "Teacher rating",
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
     },
    grid: {
      left: '1%',
       right: '1%',
      bottom: '1%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: this.name,
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        label:{
          show: true,
          position:'top',
        },
        data: this.grade,
        type: 'bar',
        barWidth: '40%',
      },
    ],
  };
  constructor() {}


  ngAfterViewInit() {
    setTimeout(() => {
      connect([this.chart.nativeElement]);
    });
  }
}
