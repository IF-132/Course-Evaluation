import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { getInstanceByDom, connect, EChartsOption } from 'echarts';
import { mockTechersData } from './mockTeachersData';

@Component({
  selector: 'app-teacher-rating',
  templateUrl: './teacher-rating.component.html',
  styleUrls: ['./teacher-rating.component.scss'],
})
export class TeacherRatingComponent implements OnInit {
  @ViewChild('chart') chart: ElementRef;
  name: string[] = mockTechersData.map((n) => n.name);
  grade: number[] = mockTechersData.map((g) => g.grade);

  chartOption: EChartsOption = {
    title: {
          text: "Rating of teachers",

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
      // height: '60%',
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
        data: this.grade,
        type: 'bar',
      },
    ],
  };

  // options: EChartsOption = {
  //   legend: {
  //     data: ["Rating of teachers"],
  //     align: 'left',

  //   },
  //   title: {
  //     text: "Rating of teachers",
  //   },
  //   color: ['#3398DB'],
  //   // tooltip: {
  //   //   trigger: 'axis',
  //   //   axisPointer: {
  //   //     type: 'shadow',
  //   //   },
  //   // },
  //   grid: {
  //     left: '3%',
  //     right: '4%',
  //     bottom: '3%',
  //     containLabel: true,
  //     // height: '60%',
  //   },
  //   xAxis: [
  //     {
  //       type: 'category',
  //       data: this.name,
  //       axisTick: {
  //         alignWithLabel: true,
  //       },
  //     },
  //   ],
  //   yAxis: [
  //     {
  //       type: 'value',
  //     },
  //   ],
  //   series: [
  //     {
  //       name: 'Counters',
  //       type: 'bar',
  //       barWidth: '40%',

  //       data: this.grade,
  //     },
  //   ],
  // };

  constructor() {}

  ngOnInit(): void {
    console.log('eeee');
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     connect([this.chart.nativeElement]);
  //   });
  // }
}
