import { Component, ElementRef, Input, Output, EventEmitter, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import * as Gauge from 'svg-gauge';

@Component({
  selector: 'mwl-gauge',
  template: ''
})
export class GaugeComponent implements AfterViewInit, OnChanges {

  /**
   * The angle in degrees to start the dial
   */
  @Input() dialStartAngle: number = 135;

  /**
   * The angle in degrees to end the dial. This MUST be less than dialStartAngle
   */
  @Input() dialEndAngle: number = 45;

  /**
   * The radius of the gauge
   */
  @Input() radius: number = 400;

  /**
   * The maximum value for the gauge
   */
  @Input() max: number = 100;

  /**
   * Function that returns a string label that will be rendered in the center. This function will be passed the current value
   */
  @Input() label: (value: number) => string;

  /**
   * Whether to show the value at the center of the gauge
   */
  @Input() showValue: boolean = true;

  /**
   * The CSS class of the gauge
   */
  @Input() gaugeClass: string = 'gauge';

  /**
   * The CSS class of the gauge's dial
   */
  @Input() dialClass: string = 'dial';

  /**
   * The CSS class of the gauge's fill (value dial)
   */
  @Input() valueDialClass: string = 'value';

  /**
   * 	The CSS class of the gauge's text
   */
  @Input() valueTextClass: string = 'value-text';

  /**
   * The value of the gauge
   */
  @Input() value: number;

  /**
   * Whether to animate changing the gauge
   */
  @Input() animated: boolean = false;

  /**
   * Animation duration in seconds
   */
  @Input() animationDuration: number;

  /**
   * Called when the gauge is created
   */
  @Output() gaugeCreated: EventEmitter<{gauge: any}> = new EventEmitter();

  private gauge: any;

  constructor(private elm: ElementRef) {}

  ngAfterViewInit(): void {
    this.gauge = Gauge(this.elm.nativeElement, {
      dialStartAngle: this.dialStartAngle,
      dialEndAngle: this.dialEndAngle,
      radius: this.radius,
      max: this.max,
      label: this.label,
      showValue: this.showValue,
      gaugeClass: this.gaugeClass,
      dialClass: this.dialClass,
      valueDialClass: this.valueDialClass,
      valueTextClass: this.valueTextClass,
      value: this.value
    });

    this.gaugeCreated.emit({gauge: this.gauge});

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
