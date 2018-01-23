import { Injectable } from '@angular/core';

@Injectable()
export class HighchartsOptions {
  private chart() {
    return {
      marginLeft: 60,
      marginRight: 30,
      marginTop: 40,
    };
  }

  private legend() {
    return {
      enabled: false,
    };
  }

  private title() {
    return {
      text: null,
    };
  }

  private exporting() {
    return {
      enabled: false,
    };
  }

  private xAxis() {
    return {
      type: 'datetime',
      dateTimeLabelFormats: {
        hour: '%I:%M %p',
        day: '%e, %b',
        week: '%m-%d',
        month: '%b, %Y',
        year: '%Y',
      },
      tickPosition: 'inside',
      crosshair: true,
    };
  }

  private yAxis() {
    return {
      labels: {
        format: '{value}',
      },
    };
  }

  private defs() {
    return {
      glow: {
        tagName: 'filter',
        id: 'glow',
        opacity: 0.8,
        children: [{
          tagName: 'feGaussianBlur',
          result: 'coloredBlur',
          stdDeviation: 6,
        }, {
          tagName: 'feMerge',
          children: [{
            tagName: 'feMergeNode',
            _in: 'coloredBlur'
          }, {
            tagName: 'feMergeNode',
            _in: 'SourceGraphic'
          }],
        }],
      },
      gradient0: {
        tagName: 'linearGradient',
        id: 'gradient-0',
        x1: 1,
        y1: 0,
        x2: 0,
        y2: 0,
        children: [{
          tagName: 'stop',
          offset: 0,
        }, {
          tagName: 'stop',
          offset: 1,
        }],
      },
      gradient1: {
        tagName: 'linearGradient',
        id: 'gradient-1',
        x1: 1,
        y1: 0,
        x2: 0,
        y2: 0,
        children: [{
          tagName: 'stop',
          offset: 0,
        }, {
          tagName: 'stop',
          offset: 1,
        }],
      },
      gradient2: {
        tagName: 'linearGradient',
        id: 'gradient-2',
        x1: 1,
        y1: 0,
        x2: 0,
        y2: 0,
        children: [{
          tagName: 'stop',
          offset: 0,
        }, {
          tagName: 'stop',
          offset: 1,
        }],
      },
      gradient3: {
        tagName: 'linearGradient',
        id: 'gradient-3',
        x1: 1,
        y1: 0,
        x2: 0,
        y2: 0,
        children: [{
          tagName: 'stop',
          offset: 0,
        }, {
          tagName: 'stop',
          offset: 1,
        }],
      },
      gradient4: {
        tagName: 'linearGradient',
        id: 'gradient-4',
        x1: 1,
        y1: 0,
        x2: 0,
        y2: 0,
        children: [{
          tagName: 'stop',
          offset: 0,
        }, {
          tagName: 'stop',
          offset: 1,
        }],
      },
      gradient5: {
        tagName: 'linearGradient',
        id: 'gradient-5',
        x1: 1,
        y1: 0,
        x2: 0,
        y2: 0,
        children: [{
          tagName: 'stop',
          offset: 0,
        }, {
          tagName: 'stop',
          offset: 1,
        }],
      },
      gradient_area_1: {
        tagName: 'linearGradient',
        id: 'area-gradient-1',
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1,
        children: [{
          tagName: 'stop',
          offset: 0,
        }, {
          tagName: 'stop',
          offset: 1,
        }],
      },
      gradient_area_2: {
        tagName: 'linearGradient',
        id: 'area-gradient-2',
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1,
        children: [{
          tagName: 'stop',
          offset: 0,
        }, {
          tagName: 'stop',
          offset: 1,
        }],
      },
    };
  }

  private series() {
    return [
      {
        type: 'line',
        marker: {
          enabled: false,
        },
        zIndex: 1,
        data: [],
        animation: true,
      }, {
        type: 'scatter',
        visible: false,
        data: [],
        marker: {
          symbol: 'circle',
        },
        zIndex: 1,
        description: 'Observations',
        className: 'predict-1',
        animation: true,
      }, {
        type: 'line',
        visible: false,
        data: [],
        marker: {
          enabled: false,
        },
        zIndex: 1,
        className: 'predict-2',
        animation: true,
      }, {
        type: 'arearange',
        data: [],
        marker: {
          enabled: false,
        },
        zIndex: 0,
        visible: false,
        className: 'predict-5',
        animation: true,
        lineWidth: 0,
        enableMouseTracking: false,
      },
    ];
  }

  get() {
    return {
      chart: this.chart(),
      legend: this.legend(),
      title: this.title(),
      exporting: this.exporting(),
      xAxis: this.xAxis(),
      yAxis: this.yAxis(),
      defs: this.defs(),
      series: this.series(),
    };
  }
}

    
