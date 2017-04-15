export interface GaugeOptions {

  /**
   * The angle in degrees to start the dial
   */
  dialStartAngle?: number;

  /**
   * The angle in degrees to end the dial. This MUST be less than dialStartAngle
   */
  dialEndAngle?: number;

  /**
   * The radius of the gauge
   */
  radius?: number;

  /**
   * The maximum value for the gauge
   */
  max?: number;

  /**
   * Function that returns a string label that will be rendered in the center. This function will be passed the current value
   */
  label?: (value: number) => string;

  /**
   * Whether to show the value at the center of the gauge
   */
  showValue?: boolean;

  /**
   * The CSS class of the gauge
   */
  gaugeClass?: string;

  /**
   * The CSS class of the gauge's dial
   */
  dialClass?: string;

  /**
   * The CSS class of the gauge's fill (value dial)
   */
  valueDialClass?: string;

  /**
   * 	The CSS class of the gauge's text
   */
  valueTextClass?: string;

  /**
   * The value of the gauge
   */
  value?: number;

  /**
   * Whether to animate changing the gauge
   */
  animated?: boolean;

  /**
   * Animation duration in seconds
   */
  animationDuration?: number;

}

export class GaugeDefaults implements GaugeOptions {

  /**
   * The angle in degrees to start the dial
   */
  dialStartAngle: number = 135;

  /**
   * The angle in degrees to end the dial. This MUST be less than dialStartAngle
   */
  dialEndAngle: number = 45;

  /**
   * The radius of the gauge
   */
  radius: number = 400;

  /**
   * The maximum value for the gauge
   */
  max: number = 100;

  /**
   * Function that returns a string label that will be rendered in the center. This function will be passed the current value
   */
  label: (value: number) => string;

  /**
   * Whether to show the value at the center of the gauge
   */
  showValue: boolean = true;

  /**
   * The CSS class of the gauge
   */
  gaugeClass: string = 'gauge';

  /**
   * The CSS class of the gauge's dial
   */
  dialClass: string = 'dial';

  /**
   * The CSS class of the gauge's fill (value dial)
   */
  valueDialClass: string = 'value';

  /**
   * 	The CSS class of the gauge's text
   */
  valueTextClass: string = 'value-text';

  /**
   * The value of the gauge
   */
  value: number;

  /**
   * Whether to animate changing the gauge
   */
  animated: boolean = false;

  /**
   * Animation duration in seconds
   */
  animationDuration: number;

}