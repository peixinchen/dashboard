import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import * as $ from 'jquery';

import { CandleService } from './candle.service';
import { HighchartsOptions } from './highcharts-options';

@Component({
  selector: 'app-candle',
  templateUrl: './candle.component.html',
  styleUrls: ['./candle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CandleService, HighchartsOptions],
})
export class CandleComponent implements OnInit {

  @Input() chartId: string;
  @Input() symbol: string;

  chartObject: Highcharts.ChartObject;

  get displaySymbol(): string {
    return this.symbol.slice(0, 3) + ' - ' + this.symbol.slice(3, 6);
  }

  constructor(
    private candleService: CandleService,
    private highchartsOptions: HighchartsOptions,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chartObject = this.drawBaseChart();
  }

  ngOnDestroy() {
    this.chartObject = null;
  }

  drawBaseChart(): Highcharts.ChartObject {
    let options = this.highchartsOptions.get();
    console.log(options);
    return Highcharts.chart(this.chartId, options);
  }
}
