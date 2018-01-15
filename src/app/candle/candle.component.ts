import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input } from '@angular/core';
import * as Highcharts from 'highcharts/js/highcharts';

@Component({
  selector: 'app-candle',
  templateUrl: './candle.component.html',
  styleUrls: ['./candle.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CandleComponent implements OnInit {

  @Input() currency: string;

  @ViewChild('chartTarget') chartTarget: ElementRef;
  chart: Highcharts.ChartObject;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.chart = Highcharts.chart(this.chartTarget.nativeElement, {
      chart: {
        type: 'bar',
      },

      title: {
        text: this.currency,
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

  ngOnDestroy() {
    this.chart = null;
  }

}
