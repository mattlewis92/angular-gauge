import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { GaugeComponent } from './gauge.component';
import { GaugeDefaults, GaugeOptions } from './gauge-defaults.service';

export const USER_DEFAULTS: InjectionToken<string> = new InjectionToken(
  'gauge defaults'
);

@NgModule({
  declarations: [GaugeComponent],
  imports: [],
  exports: [GaugeComponent],
})
export class GaugeModule {
  static forRoot(
    userDefaults: GaugeOptions = {}
  ): ModuleWithProviders<GaugeModule> {
    return {
      ngModule: GaugeModule,
      providers: [
        {
          provide: USER_DEFAULTS,
          useValue: userDefaults,
        },
        {
          provide: GaugeDefaults,
          useFactory: (options: GaugeOptions) => {
            const defaults: GaugeDefaults = new GaugeDefaults();
            Object.assign(defaults, options);
            return defaults;
          },
          deps: [USER_DEFAULTS],
        },
      ],
    };
  }
}
