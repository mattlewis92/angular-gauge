import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GaugeModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, GaugeModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
