# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.0.0](https://github.com/mattlewis92/angular-gauge/compare/v3.1.3...v4.0.0) (2020-10-12)


### ⚠ BREAKING CHANGES

* angular 10 or higher is now required to use this package

### Features

* upgrade to angular 10 ([4736149](https://github.com/mattlewis92/angular-gauge/commit/47361498935bfed9e5f5f91fc1c44a6291d352ec))

<a name="3.1.3"></a>

## [3.1.3](https://github.com/mattlewis92/angular-gauge/compare/v3.1.2...v3.1.3) (2020-07-01)

### Bug Fixes

- allow newer versions of angular in peer dependencies ([f219eb8](https://github.com/mattlewis92/angular-gauge/commit/f219eb8))

<a name="3.1.2"></a>

## [3.1.2](https://github.com/mattlewis92/angular-gauge/compare/v3.1.1...v3.1.2) (2019-08-06)

### Bug Fixes

- allow angular 7 and 8 peer dependency ([869eee0](https://github.com/mattlewis92/angular-gauge/commit/869eee0))
- upgrade svg gauge ([2d56240](https://github.com/mattlewis92/angular-gauge/commit/2d56240))

<a name="3.1.1"></a>

## [3.1.1](https://github.com/mattlewis92/angular-gauge/compare/v3.1.0...v3.1.1) (2018-05-05)

### Bug Fixes

- allow angular 6 peer dependency ([2ff6b49](https://github.com/mattlewis92/angular-gauge/commit/2ff6b49))

<a name="3.1.0"></a>

# [3.1.0](https://github.com/mattlewis92/angular-gauge/compare/v3.0.0...v3.1.0) (2018-01-19)

### Features

- support dynamic value coloring ([2d2408c](https://github.com/mattlewis92/angular-gauge/commit/2d2408c))

<a name="3.0.0"></a>

# [3.0.0](https://github.com/mattlewis92/angular-gauge/compare/v2.0.1...v3.0.0) (2017-12-23)

### Features

- upgrade svg-gauge ([f042c4e](https://github.com/mattlewis92/angular-gauge/commit/f042c4e)), closes [#9](https://github.com/mattlewis92/angular-gauge/issues/9)
- upgrade to angular 5 ([ea9206d](https://github.com/mattlewis92/angular-gauge/commit/ea9206d))
- use ng-packagr for building dist files ([92e6447](https://github.com/mattlewis92/angular-gauge/commit/92e6447)), closes [#10](https://github.com/mattlewis92/angular-gauge/issues/10)

### BREAKING CHANGES

- The svg-gauge dependency was updated, your [CSS will need to be slightly adjusted](https://github.com/naikus/svg-gauge#migration-from-102).
- The svg-gauge package is no longer bundled with this library, system.js users will
  have to add a reference to it in their system.js config
- The `valueTextClass` input was renamed to `valueClass` and the `radius` input was
  renamed to `dialRadius`
- angular 5 or higher is now required to use this package

<a name="2.0.1"></a>

## [2.0.1](https://github.com/mattlewis92/angular-gauge/compare/v2.0.0...v2.0.1) (2017-12-10)

### Bug Fixes

- allow angular 5 peer dependency ([90c6b93](https://github.com/mattlewis92/angular-gauge/commit/90c6b93)), closes [#8](https://github.com/mattlewis92/angular-gauge/issues/8)
- only pass defined options to svg gauge ([f929c40](https://github.com/mattlewis92/angular-gauge/commit/f929c40)), closes [#7](https://github.com/mattlewis92/angular-gauge/issues/7)
- pin svg-gauge version to last version without breaking changes ([e2c0cae](https://github.com/mattlewis92/angular-gauge/commit/e2c0cae))

<a name="2.0.0"></a>

# [2.0.0](https://github.com/mattlewis92/angular-gauge/compare/v1.0.0...v2.0.0) (2017-04-15)

### Features

- **defaults:** allow the default options to be configured in the modules forRoot method ([b10460c](https://github.com/mattlewis92/angular-gauge/commit/b10460c)), closes [#1](https://github.com/mattlewis92/angular-gauge/issues/1)

### BREAKING CHANGES

- **defaults:** angular 4 or higher is now required to run this module. The modules forRoot method
  must now be called when importing it

<a name="1.0.0"></a>

# 1.0.0 (2017-03-22)

### Features

- initial implementation ([c731cee](https://github.com/mattlewis92/angular-gauge/commit/c731cee))
