import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {GaugeOptions} from '../../../angular-gauge/src/lib/gauge-defaults.service';

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
        [animationDuration]="1"
      >
      </mwl-gauge>

      <mwl-gauge
        class="two"
        [max]="100"
        [dialStartAngle]="180"
        [dialEndAngle]="0"
        [value]="gaugeValues[2]"
        [animated]="true"
        [animationDuration]="2"
      >
      </mwl-gauge>

      <mwl-gauge
        class="three"
        [max]="100"
        [value]="gaugeValues[3]"
        [animated]="true"
        [animationDuration]="1.5"
      >
      </mwl-gauge>

      <mwl-gauge
        class="four"
        [max]="100"
        [dialStartAngle]="180"
        [dialEndAngle]="-90"
        [value]="gaugeValues[4]"
        [animated]="true"
        [animationDuration]="2"
      >
      </mwl-gauge>

      <mwl-gauge
        class="five"
        [max]="200"
        [dialStartAngle]="0"
        [dialEndAngle]="-180"
        [value]="gaugeValues[5]"
        [animated]="true"
        [animationDuration]="1"
      >
      </mwl-gauge>

      <mwl-gauge
        class="six"
        [max]="100"
        [dialStartAngle]="90.01"
        [dialEndAngle]="89.99"
        [dialRadius]="10"
        [showValue]="false"
        [value]="gaugeValues[6]"
        [animated]="true"
        [animationDuration]="1"
      >
      </mwl-gauge>

      <mwl-gauge
        class="seven"
        [max]="100"
        [dialStartAngle]="-90"
        [dialEndAngle]="-90.001"
        [showValue]="false"
        [value]="gaugeValues[6]"
        [animated]="true"
        [animationDuration]="1"
      >
      </mwl-gauge>
    </div>
  `,
  styles: [
    `
      body {
        background-color: rgba(0, 0, 0, 0.8);
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
        stroke-width: 2;
        fill: rgba(0, 0, 0, 0);
      }
      mwl-gauge > .gauge > .value {
        stroke: rgb(47, 227, 255);
        stroke-width: 2;
        fill: rgba(0, 0, 0, 0);
      }
      mwl-gauge > .gauge > .value-text {
        fill: rgb(47, 227, 255);
        font-family: sans-serif;
        font-weight: bold;
        font-size: 0.8em;
      }

      /* ------- Alternate Style ------- */
      mwl-gauge.two {
      }
      mwl-gauge.two > .gauge > .dial {
        stroke: #334455;
        stroke-width: 10;
      }
      mwl-gauge.two > .gauge > .value {
        stroke: orange;
        stroke-dasharray: none;
        stroke-width: 13;
      }
      mwl-gauge.two > .gauge > .value-text {
        fill: orange;
      }

      /* ------- Alternate Style ------- */
      mwl-gauge.three {
      }
      mwl-gauge.three > .gauge > .dial {
        stroke: #334455;
        stroke-width: 2;
      }
      mwl-gauge.three > .gauge > .value {
        stroke: #c9de3c;
        stroke-width: 5;
      }
      mwl-gauge.three > .gauge > .value-text {
        fill: #c9de3c;
      }

      /* ----- Alternate Style ----- */
      mwl-gauge.four > .gauge > .dial {
        stroke: #334455;
        stroke-width: 5;
      }
      mwl-gauge.four > .gauge > .value {
        stroke: #be80ff;
        stroke-dasharray: none;
        stroke-width: 5;
      }
      mwl-gauge.four > .gauge > .value-text {
        fill: #be80ff;
      }

      /* ----- Alternate Style ----- */
      mwl-gauge.five > .gauge > .dial {
        stroke: #334455;
        stroke-width: 5;
      }
      mwl-gauge.five > .gauge > .value {
        stroke: #f8774b;
        stroke-dasharray: 25 1;
        stroke-width: 5;
      }
      mwl-gauge.five > .gauge > .value-text {
        fill: #f8774b;
        font-size: 0.7em;
      }

      /* ----- Alternate Style ----- */
      mwl-gauge.six > .gauge > .dial {
        stroke: #334455;
        fill: #334455;
        stroke-width: 20;
      }
      mwl-gauge.six > .gauge > .value {
        stroke: #ff6daf;
        stroke-width: 20;
      }
      mwl-gauge.six > .gauge > .value-text {
        fill: #ff6daf;
        font-size: 0.7em;
      }

      mwl-gauge.seven > .gauge > .dial {
        stroke: transparent;
        stroke-width: 5;
        transform: scale(0.9, 0.9) translate3d(5.5px, 5.5px, 0);
        fill: rgba(148, 112, 57, 0.42);
      }
      mwl-gauge.seven > .gauge > .value {
        stroke: #f8774b;
        stroke-dasharray: none;
        stroke-width: 5;
      }
    `,
  ],
})
export class DemoComponent implements OnInit, OnDestroy {
  percentageValue: (value: number) => string;

  gaugeValues: any = {
    1: 100,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 50,
  };

  interval: any;

  constructor() {
    this.percentageValue = function (value: number): string {
      return `${Math.round(value)} / ${(this as GaugeOptions)['max']}`;
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
        6: Math.round(Math.random() * 100),
        7: Math.round(Math.random() * 100),
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
