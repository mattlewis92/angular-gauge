import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SvgGaugeModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, SvgGaugeModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}