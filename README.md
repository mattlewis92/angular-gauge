# angular svg gauge
[![Build Status](https://travis-ci.org/mattlewis92/angular-svg-gauge.svg?branch=master)](https://travis-ci.org/mattlewis92/angular-svg-gauge)
[![codecov](https://codecov.io/gh/mattlewis92/angular-svg-gauge/branch/master/graph/badge.svg)](https://codecov.io/gh/mattlewis92/angular-svg-gauge)
[![npm version](https://badge.fury.io/js/angular-svg-gauge.svg)](http://badge.fury.io/js/angular-svg-gauge)
[![devDependency Status](https://david-dm.org/mattlewis92/angular-svg-gauge/dev-status.svg)](https://david-dm.org/mattlewis92/angular-svg-gauge?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/mattlewis92/angular-svg-gauge.svg)](https://github.com/mattlewis92/angular-svg-gauge/issues)
[![GitHub stars](https://img.shields.io/github/stars/mattlewis92/angular-svg-gauge.svg)](https://github.com/mattlewis92/angular-svg-gauge/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/mattlewis92/angular-svg-gauge/master/LICENSE)

## Demo
https://mattlewis92.github.io/angular-svg-gauge/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

A tiny angular 2.0+ wrapper for https://github.com/naikus/svg-gauge

## Installation

Install through npm:
```
npm install --save angular-svg-gauge
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { SVGGaugeModule } from 'angular-svg-gauge';

@NgModule({
  imports: [
    SVGGaugeModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/mattlewis92/angular-svg-gauge/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/angular-svg-gauge/bundles/angular-svg-gauge.umd.js"></script>
<script>
    // everything is exported angularSvgGauge namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://mattlewis92.github.io/angular-svg-gauge/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
