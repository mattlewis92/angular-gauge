import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'mwl-demo-app',
  encapsulation: ViewEncapsulation.None,
  template: `

    <div class="gauges-container">

      <mwl-gauge
        [max]="100"
        [dialStartAngle]="-90"
        [dialEndAngle]="-90.001"
        [label]="percentageValue"
        [value]="gaugeValues[1]"
        [animated]="true"
        [animationDuration]="1">
      </mwl-gauge>

      <mwl-gauge
        class="two"
        [max]="100"
        [dialStartAngle]="180"
        [dialEndAngle]="0"
        [value]="gaugeValues[2]"
        [animated]="true"
        [animationDuration]="2">
      </mwl-gauge>

      <mwl-gauge
        class="three"
        [max]="100"
        [value]="gaugeValues[3]"
        [animated]="true"
        [animationDuration]="1.5">
      </mwl-gauge>

      <mwl-gauge
        class="four"
        [max]="100"
        [dialStartAngle]="180"
        [dialEndAngle]="-90"
        [value]="gaugeValues[4]"
        [animated]="true"
        [animationDuration]="2">
      </mwl-gauge>

      <mwl-gauge
        class="five"
        [max]="200"
        [dialStartAngle]="0"
        [dialEndAngle]="-180"
        [value]="gaugeValues[5]"
        [animated]="true"
        [animationDuration]="1">
      </mwl-gauge>

      <mwl-gauge
        class="six"
        [max]="100"
        [dialStartAngle]="90.01"
        [dialEndAngle]="89.99"
        [radius]="150"
        [showValue]="false"
        [value]="gaugeValues[6]"
        [animated]="true"
        [animationDuration]="1">
      </mwl-gauge>

    </div>

  `,
  styles: [
    `
    body {
      background-color: rgba(0,0,0,0.8);
      color: #999;
      font-family: Hevletica, sans-serif;
    }

    .gauges-container {
      display: flex;
    }

    /* ------ Default Style ---------- */
    mwl-gauge {
      flex: 1;
      display: block;
      padding: 10px;
      background-color: #222;
      margin: 7px;
      border-radius: 3px;
    }
    mwl-gauge > .gauge > .dial {
      stroke: #334455;
      stroke-width: 20;
      fill: rgba(0,0,0,0);
    }
    mwl-gauge > .gauge > .value {
      stroke: rgb(47, 227, 255);
      stroke-width: 20;
      fill: rgba(0,0,0,0);
    }
    mwl-gauge > .gauge > .value-text {
      fill: rgb(47, 227, 255);
      font-family: sans-serif;
      font-weight: bold;
      font-size: 8em;
    }

    /* ------- Alternate Style ------- */
    mwl-gauge.two {
    }
    mwl-gauge.two > .gauge > .dial {
      stroke: #334455;
      stroke-width: 100;
    }
    mwl-gauge.two > .gauge > .value {
      stroke: orange;
      stroke-dasharray: none;
      stroke-width: 130;
    }
    mwl-gauge.two > .gauge > .value-text {
      fill: orange;
    }

    /* ------- Alternate Style ------- */
    mwl-gauge.three {
    }
    mwl-gauge.three > .gauge > .dial {
      stroke: #334455;
      stroke-width: 20;
    }
    mwl-gauge.three > .gauge > .value {
      stroke: #C9DE3C;
      stroke-width: 50;
    }
    mwl-gauge.three > .gauge > .value-text {
      fill: #C9DE3C;
    }

    /* ----- Alternate Style ----- */
    mwl-gauge.four > .gauge > .dial {
      stroke: #334455;
      stroke-width: 50;
    }
    mwl-gauge.four > .gauge > .value {
      stroke: #BE80FF;
      stroke-dasharray: none;
      stroke-width: 50;
    }
    mwl-gauge.four > .gauge > .value-text {
      fill: #BE80FF;
    }

    /* ----- Alternate Style ----- */
    mwl-gauge.five > .gauge > .dial {
      stroke: #334455;
      stroke-width: 50;
    }
    mwl-gauge.five > .gauge > .value {
      stroke: #F8774B;
      stroke-dasharray: none;
      stroke-width: 50;
    }
    mwl-gauge.five > .gauge > .value-text {
      fill: #F8774B;
      font-size: 7em;
    }

    /* ----- Alternate Style ----- */
    mwl-gauge.six > .gauge > .dial {
      stroke: #334455;
      stroke-dasharray: 104 14;
      stroke-width: 70;
    }
    mwl-gauge.six > .gauge > .value {
      stroke: #FF6DAF;
      stroke-dasharray: 104 14;
      stroke-width: 70;
    }
    mwl-gauge.six > .gauge > .value-text {
      fill: #FF6DAF;
      font-size: 7em;
    }
  `
  ]
})
export class DemoComponent implements OnInit, OnDestroy {
  percentageValue: (value: number) => string;

  gaugeValues: any = {
    1: 100,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50
  };

  interval: any;

  constructor() {
    this.percentageValue = function(value: number): string {
      return `${Math.round(value)} / ${this['max']}`;
    };
  }

  ngOnInit(): void {
    const updateValues = (): void => {
      this.gaugeValues = {
        1: Math.round(Math.random() * 100),
        2: Math.round(Math.random() * 100),
        3: Math.round(Math.random() * 100),
        4: Math.round(Math.random() * 100),
        5: Math.round(Math.random() * 200),
        6: Math.round(Math.random() * 100)
      };
    };

    const INTERVAL: number = 5000;

    this.interval = setInterval(updateValues, INTERVAL);
    updateValues();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
