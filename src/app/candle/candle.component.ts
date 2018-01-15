import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/js/highcharts';

@Component({
  selector: 'app-candle',
  templateUrl: './candle.component.html',
  styleUrls: ['./candle.component.css']
})
export class CandleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Highcharts.chart('container', {
      chart: {
        type: 'bar',
      },

      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges'],
      },

      yAxis: {
        title: {
          text: 'Fruit eaten',
        },
      },

      series: [{
        name: 'Jane',
        data: [1, 0, 4],
      }, {
        name: 'John',
        data: [5, 7, 3],
      }],
    });
  }

}
