# angular gauge

[![Build Status](https://travis-ci.org/mattlewis92/angular-gauge.svg?branch=master)](https://travis-ci.org/mattlewis92/angular-gauge)
[![codecov](https://codecov.io/gh/mattlewis92/angular-gauge/branch/master/graph/badge.svg)](https://codecov.io/gh/mattlewis92/angular-gauge)
[![npm version](https://badge.fury.io/js/angular-gauge.svg)](http://badge.fury.io/js/angular-gauge)
[![devDependency Status](https://david-dm.org/mattlewis92/angular-gauge/dev-status.svg)](https://david-dm.org/mattlewis92/angular-gauge?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/mattlewis92/angular-gauge.svg)](https://github.com/mattlewis92/angular-gauge/issues)
[![GitHub stars](https://img.shields.io/github/stars/mattlewis92/angular-gauge.svg)](https://github.com/mattlewis92/angular-gauge/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/mattlewis92/angular-gauge/master/LICENSE)

## Demo

https://mattlewis92.github.io/angular-gauge/

## Table of contents

- [About](#about)
- [Compatibility](#compatibility)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

A tiny angular 10.0+ wrapper for https://github.com/naikus/svg-gauge

## Compatibility

| angular-gauge | Angular |
| ------------- | ------- |
| <=3.x.x       | <=9     |
| 4.x.x         | 10      |

## Installation

Install through npm:

```
npm install --save angular-gauge
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { GaugeModule } from 'angular-gauge';

@NgModule({
  imports: [GaugeModule.forRoot()],
})
export class MyModule {}
```

By default no styling is included with the gauge so you need to define some global styles:

```css
mwl-gauge {
  width: 150px;
  height: 150px;
  display: block;
  padding: 10px;
}
mwl-gauge > .gauge > .dial {
  stroke: #eee;
  stroke-width: 2;
  fill: rgba(0, 0, 0, 0);
}
mwl-gauge > .gauge > .value {
  stroke: rgb(47, 227, 255);
  stroke-width: 2;
  fill: rgba(0, 0, 0, 0);
}
mwl-gauge > .gauge > .value-text {
  fill: rgb(47, 227, 255);
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1em;
}
```

Finally use in one of your apps components:

```typescript
import { Component } from '@angular/core';

@Component({
  template: `
    <mwl-gauge
      [max]="100"
      [dialStartAngle]="-90"
      [dialEndAngle]="-90.001"
      [value]="50"
      [animated]="true"
      [animationDuration]="1"
    >
    </mwl-gauge>
  `,
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/mattlewis92/angular-gauge/blob/master/demo/demo.component.ts).

This lib is just a tiny wrapper over the excellent [svg-gauge](https://github.com/naikus/svg-gauge) library.

### Usage without a module bundler

```
<script src="node_modules/angular-gauge/bundles/angular-gauge.umd.js"></script>
<script>
    // everything is exported `angular-gauge` namespace
</script>
```

## Documentation

All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://mattlewis92.github.io/angular-gauge/docs/

## Development

### Prepare your environment

- Install [Node.js](http://nodejs.org/) and NPM (should come with)
- Install local dev dependencies: `npm install` while current directory is this repo

### Development server

Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing

Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release

```bash
npm run release
```

## License

MIT
