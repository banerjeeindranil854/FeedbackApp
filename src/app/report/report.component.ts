import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  chart:any;
  barchart:any;
  piechart:any;
  ariachart:any;
  constructor() {
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          type:undefined,
          name: 'Line 1',
          data: [1, 2, 3]
        }
      ]
    });
    this.barchart = new Chart({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Barchart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          type:undefined,
          name: 'Bar 1',
          data: [1, 2, 3]
        }
      ]
    });
    this.piechart = new Chart({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Pai Chart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          type:undefined,
          name: 'Pie 1',
          data: [1, 2, 3]
        }
      ]
    });
    this.ariachart = new Chart({
      chart: {
        type: 'area'
      },
      title: {
        text: 'Areachart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          type:undefined,
          name: 'Area 1',
          data: [1, 2, 3,4,2]
        },
        {
          type:undefined,
          name: 'Area 1',
          data: [2,6,10,5,3]
        }
      ]
    });
   }

  ngOnInit() {
  }

}
