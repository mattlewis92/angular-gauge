import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { GaugeComponent } from './gauge.component';
import { GaugeDefaults, GaugeOptions } from './gauge-defaults.service';

export const USER_DEFAULTS: InjectionToken<string> = new InjectionToken(
  'gauge defaults'
);

export function defaultsFactory(userDefaults: GaugeOptions): GaugeDefaults {
  const defaults: GaugeDefaults = new GaugeDefaults();
  Object.assign(defaults, userDefaults);
  return defaults;
}

@NgModule({
  declarations: [GaugeComponent],
  exports: [GaugeComponent]
})
export class GaugeModule {
  static forRoot(userDefaults: GaugeOptions = {}): ModuleWithProviders {
    return {
      ngModule: GaugeModule,
      providers: [
        {
          provide: USER_DEFAULTS,
          useValue: userDefaults
        },
        {
          provide: GaugeDefaults,
          useFactory: defaultsFactory,
          deps: [USER_DEFAULTS]
        }
      ]
    };
  }
}
