import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SVGGaugeModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, SVGGaugeModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}