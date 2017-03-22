import { NgModule } from '@angular/core';
import { GaugeComponent } from './gauge.component';

@NgModule({
  declarations: [
    GaugeComponent
  ],
  exports: [
    GaugeComponent
  ]
})
export class GaugeModule {}