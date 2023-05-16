import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DemoComponent } from './demo.component';
// import {GaugeModule} from '../../../angular-gauge/src/lib/gauge.module';
import { GaugeModule } from 'angular-gauge';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, GaugeModule.forRoot()],
  providers: [],
  bootstrap: [DemoComponent],
})
export class DemoModule {}
