import { Component, ViewChild } from '@angular/core';
import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { GaugeComponent } from '../src/gauge.component';
import { GaugeModule } from '../src';

@Component({
  template: `
    <mwl-gauge 
      [value]="value" 
      [animated]="animated" 
      [animationDuration]="animationDuration" 
      [label]="label"
      [gaugeClass]="gaugeClass"
      [dialClass]="dialClass"
      [valueDialClass]="valueDialClass"
      [valueTextClass]="valueTextClass"
      [showValue]="showValue"
      (gaugeCreated)="gaugeCreated($event)">
    </mwl-gauge>
  `
})
class TestComponent {
  @ViewChild(GaugeComponent) public gauge: GaugeComponent;
  value: number = 25;
  gaugeCreated: sinon.SinonSpy = sinon.spy();
  animated: boolean;
  animationDuration: number;
  label: (value: number) => string;
  showValue: boolean;
  gaugeClass: string;
  dialClass: string;
  valueDialClass: string;
  valueTextClass: string;
}

describe('mwl-gauge component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        GaugeModule
      ],
      declarations: [
        TestComponent
      ]
    });
  });

  it('should create a gauge', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mwl-gauge').innerHTML.trim()).to.equal(
      '<svg viewBox="0 0 1000 1000" class="gauge"><path class="dial" fill="transparent" ' +
      'stroke="#eee" stroke-width="20" d="M 217.157 782.843 A 400 400 0 1 1 782.843 782.843"></path>' +
      '<text class="value-text" x="500" y="550" font-size="700%" font-family="sans-serif" ' +
      'font-weight="bold" text-anchor="middle">25</text><path class="value" fill="transparent" ' +
      'stroke="#666" stroke-width="25" d="M 217.157 782.843 A 400 400 0 0 1 130.448 346.927"></path></svg>'
    );
  });

  it('should update the gauge value', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    fixture.componentInstance.value = 50;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mwl-gauge').innerHTML.trim()).to.equal(
      '<svg viewBox="0 0 1000 1000" class="gauge"><path class="dial" fill=' +
      '"transparent" stroke="#eee" stroke-width="20" d="M 217.157 782.843 A ' +
      '400 400 0 1 1 782.843 782.843"></path><text class="value-text" x="500" ' +
      'y="550" font-size="700%" font-family="sans-serif" font-weight="bold" ' +
      'text-anchor="middle">50</text><path class="value" fill="transparent" stroke="#666" ' +
      'stroke-width="25" d="M 217.157 782.843 A 400 400 0 0 1 500 100"></path></svg>'
    );
  });

  it('should emit the gauge when it is created', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.gaugeCreated).to.have.been.calledWith({gauge: fixture.componentInstance.gauge['gauge']});
  });

  it('should animate changing the gauge value', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.componentInstance.animated = true;
    fixture.componentInstance.animationDuration = 1;
    fixture.detectChanges();
    const gauge: any = fixture.componentInstance.gauge['gauge'];
    sinon.spy(gauge, 'setValueAnimated');
    fixture.componentInstance.value = 50;
    fixture.detectChanges();
    expect(gauge.setValueAnimated).to.have.been.calledWith(50, 1);
  });

  it('should not animate changing the gauge value', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const gauge: any = fixture.componentInstance.gauge['gauge'];
    sinon.spy(gauge, 'setValue');
    fixture.componentInstance.value = 50;
    fixture.detectChanges();
    expect(gauge.setValue).to.have.been.calledWith(50);
  });

  it('should allow the gauge label to be customised', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.componentInstance.label = value => `Value: ${value}`;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mwl-gauge').innerHTML).to.contain('<text class="value-text" x="500" ' +
      'y="550" font-size="700%" font-family="sans-serif" font-weight="bold" ' +
      'text-anchor="middle">Value: 25</text>');
  });

  it('should hide the gauge value', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.componentInstance.showValue = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mwl-gauge').innerHTML).to.contain('<text class="value-text" x="500" ' +
      'y="550" font-size="700%" font-family="sans-serif" font-weight="bold" text-anchor="middle"></text>');
  });

  it('should allow the gauge class to be customised', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.componentInstance.gaugeClass = 'gauge-class';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mwl-gauge').innerHTML).to.contain('<svg viewBox="0 0 1000 1000" class="gauge-class">');
  });

  it('should allow the dial class to be customised', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.componentInstance.dialClass = 'dial-class';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mwl-gauge').innerHTML).to.contain('<path class="dial-class" fill="transparent" ' +
      'stroke="#eee" stroke-width="20" d="M 217.157 782.843 A 400 400 0 1 1 782.843 782.843"></path>');
  });

  it('should allow the value dial class to be customised', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.componentInstance.valueDialClass = 'value-class';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mwl-gauge').innerHTML).to.contain('<path class="value-class" ' +
      'fill="transparent" stroke="#666" stroke-width="25" d="M 217.157 782.843 A 400 400 0 0 1 130.448 346.927"></path>');
  });

  it('should allow the value text class to be customised', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.componentInstance.valueTextClass = 'value-text-class';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mwl-gauge').innerHTML).to.contain('<text class="value-text-class"' +
      ' x="500" y="550" font-size="700%" font-family="sans-serif" font-weight="bold" text-anchor="middle">25</text>');
  });

  it('should only create the gauge once', () => {
    const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const gauge: any = fixture.componentInstance.gauge['gauge'];
    fixture.componentInstance.showValue = false;
    fixture.detectChanges();
    expect(fixture.componentInstance.gauge['gauge']).to.equal(gauge);
  });

});
