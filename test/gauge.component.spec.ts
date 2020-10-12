import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
      [valueClass]="valueClass"
      [showValue]="showValue"
      (gaugeCreated)="gaugeCreated($event)"
    >
    </mwl-gauge>
  `,
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
  valueClass: string;
}

describe('mwl-gauge component', () => {
  describe('without defaults set', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [GaugeModule.forRoot()],
        declarations: [TestComponent],
      });
    });

    it('should create a gauge', () => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
        TestComponent
      );
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelector('mwl-gauge').innerHTML.trim()
      ).to.equal(
        '<svg viewBox="0 0 100 100" class="gauge"><path class="dial" fill="none" stroke="#eee" stroke-width="2" d="M 21.716 78.284 A 40 40 0 1 1 78.284 78.284"></path><text x="50" y="50" fill="#999" class="value-text" font-size="100%" font-family="sans-serif" font-weight="normal" text-anchor="middle" alignment-baseline="middle" dominant-baseline="central">25</text><path class="value" fill="none" stroke="#666" stroke-width="2.5" d="M 21.716 78.284 A 40 40 0 0 1 13.045 34.693"></path></svg>'
      );
    });

    it('should update the gauge value', () => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
        TestComponent
      );
      fixture.detectChanges();
      fixture.componentInstance.value = 50;
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelector('mwl-gauge').innerHTML.trim()
      ).to.equal(
        '<svg viewBox="0 0 100 100" class="gauge"><path class="dial" fill="none" stroke="#eee" stroke-width="2" d="M 21.716 78.284 A 40 40 0 1 1 78.284 78.284"></path><text x="50" y="50" fill="#999" class="value-text" font-size="100%" font-family="sans-serif" font-weight="normal" text-anchor="middle" alignment-baseline="middle" dominant-baseline="central">50</text><path class="value" fill="none" stroke="#666" stroke-width="2.5" d="M 21.716 78.284 A 40 40 0 0 1 50 10"></path></svg>'
      );
    });

    it('should emit the gauge when it is created', () => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
        TestComponent
      );
      fixture.detectChanges();
      expect(fixture.componentInstance.gaugeCreated).to.have.been.calledWith({
        gauge: fixture.componentInstance.gauge['gauge'],
      });
    });

    it('should animate changing the gauge value', () => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
        TestComponent
      );
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
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
        TestComponent
      );
      fixture.detectChanges();
      const gauge: any = fixture.componentInstance.gauge['gauge'];
      sinon.spy(gauge, 'setValue');
      fixture.componentInstance.value = 50;
      fixture.detectChanges();
      expect(gauge.setValue).to.have.been.calledWith(50);
    });

    it('should allow the gauge label to be customised', () => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
        TestComponent
      );
      fixture.componentInstance.label = (value) => `Value: ${value}`;
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelector('mwl-gauge').innerHTML
      ).to.contain('>Value: 25</text>');
    });

    it('should hide the gauge value', () => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
        TestComponent
      );
      fixture.componentInstance.showValue = false;
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelector('mwl-gauge').innerHTML
      ).to.contain('></text>');
    });

    it('should allow the gauge class to be customised', () => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
        TestComponent
      );
      fixture.componentInstance.gaugeClass = 'gauge-class';
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelector('mwl-gauge').innerHTML
      ).to.contain('<svg viewBox="0 0 100 100" class="gauge-class">');
    });

    it('should allow the dial class to be customised', () => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
        TestComponent
      );
      fixture.componentInstance.dialClass = 'dial-class';
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelector('mwl-gauge').innerHTML
      ).to.contain('<path class="dial-class"');
    });

    it('should allow the value dial class to be customised', () => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
        TestComponent
      );
      fixture.componentInstance.valueDialClass = 'value-class';
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelector('mwl-gauge').innerHTML
      ).to.contain('<path class="value-class" ');
    });

    it('should allow the value text class to be customised', () => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
        TestComponent
      );
      fixture.componentInstance.valueClass = 'value-text-class';
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelector('mwl-gauge').innerHTML
      ).to.contain('class="value-text-class"');
    });

    it('should only create the gauge once', () => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
        TestComponent
      );
      fixture.detectChanges();
      const gauge: any = fixture.componentInstance.gauge['gauge'];
      fixture.componentInstance.showValue = false;
      fixture.detectChanges();
      expect(fixture.componentInstance.gauge['gauge']).to.equal(gauge);
    });
  });

  describe('with defaults set', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          GaugeModule.forRoot({
            label: (value) => `Value: ${value}`,
          }),
        ],
        declarations: [TestComponent],
      });
    });

    it('should allow defaults to be configured globally', () => {
      const fixture: ComponentFixture<TestComponent> = TestBed.createComponent(
        TestComponent
      );
      fixture.detectChanges();
      expect(
        fixture.nativeElement.querySelector('mwl-gauge').innerHTML
      ).to.contain('Value: 25</text>');
    });
  });
});
