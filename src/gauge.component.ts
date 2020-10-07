import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import Gauge from 'svg-gauge';
import { GaugeDefaults, GaugeOptions } from './gauge-defaults.service';

@Component({
  selector: 'mwl-gauge',
  template: ''
})
export class GaugeComponent implements AfterViewInit, OnChanges, GaugeOptions {
  /**
   * The angle in degrees to start the dial
   */
  @Input() dialStartAngle: number;

  /**
   * The angle in degrees to end the dial. This MUST be less than dialStartAngle
   */
  @Input() dialEndAngle: number;

  /**
   * The radius of the gauge
   */
  @Input() dialRadius: number;

  /**
   * The minimum value for the gauge
   */
  @Input() min: number;

  /**
   * The maximum value for the gauge
   */
  @Input() max: number;

  /**
   * Function that returns a string label that will be rendered in the center. This function will be passed the current value
   */
  @Input() label: (value: number) => string;

  /**
   * Function that returns a string color value for the gauge''s fill (value dial)
   */
  @Input() color: (value: number) => string;

  /**
   * Whether to show the value at the center of the gauge
   */
  @Input() showValue: boolean;

  /**
   * The CSS class of the gauge
   */
  @Input() gaugeClass: string;

  /**
   * The CSS class of the gauge's dial
   */
  @Input() dialClass: string;

  /**
   * The CSS class of the gauge's fill (value dial)
   */
  @Input() valueDialClass: string;

  /**
   * 	The CSS class of the gauge's text
   */
  @Input() valueClass: string;

  /**
   * The value of the gauge
   */
  @Input() value: number;

  /**
   * Whether to animate changing the gauge
   */
  @Input() animated: boolean;

  /**
   * Animation duration in seconds
   */
  @Input() animationDuration: number;

  /**
   * Called when the gauge is created
   */
  @Output() gaugeCreated: EventEmitter<{ gauge: any }> = new EventEmitter();

  private gauge: any;

  constructor(private elm: ElementRef, private defaults: GaugeDefaults) {}

  ngAfterViewInit(): void {
    const options: GaugeOptions = {
      dialStartAngle: this.dialStartAngle,
      dialEndAngle: this.dialEndAngle,
      dialRadius: this.dialRadius,
      min: this.min,
      max: this.max,
      label: this.label,
      showValue: this.showValue,
      gaugeClass: this.gaugeClass,
      dialClass: this.dialClass,
      valueDialClass: this.valueDialClass,
      valueClass: this.valueClass,
      value: this.value,
      color: this.color
    };

    Object.keys(this.defaults).forEach(optionKey => {
      if (typeof options[optionKey] === 'undefined') {
        options[optionKey] = this.defaults[optionKey];
      }
    });

    Object.keys(options).forEach(optionKey => {
      if (typeof options[optionKey] === 'undefined') {
        delete options[optionKey];
      }
    });

    this.gauge = Gauge(this.elm.nativeElement, options);

    this.gaugeCreated.emit({ gauge: this.gauge });

    this.updateValue();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.updateValue();
    }
  }

  private updateValue(): void {
    if (this.gauge) {
      if (this.animated) {
        this.gauge.setValueAnimated(this.value, this.animationDuration);
      } else {
        this.gauge.setValue(this.value);
      }
    }
  }
}
