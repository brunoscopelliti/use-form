# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.1.0](https://github.com/brunoscopelliti/@bscop/use-form/compare/v2.0.1...v2.1.0) (2022-01-07)


### Features

* add optional parameter 'shouldValidate' to forceValue ([fed5300](https://github.com/brunoscopelliti/@bscop/use-form/commits/fed5300ba1a0283cf1d8ea755a33c2be9904e22c))

### [2.0.1](https://github.com/brunoscopelliti/@bscop/use-form/compare/v2.0.0...v2.0.1) (2022-01-04)


### Bug Fixes

* fix type for custom validate Rule ([e73f575](https://github.com/brunoscopelliti/@bscop/use-form/commits/e73f57532997b142a83c22da6fd4504c0a2da084))

## [2.0.0](https://github.com/brunoscopelliti/@bscop/use-form/compare/v1.1.1...v2.0.0) (2021-12-30)


### ⚠ BREAKING CHANGES

* previously empty string value were omitted from payload;
this was unfortunate, cause it made impossible to reset the value of an input.
* when a field gets unregister its value is reset to its
default value (if any) or `undefined` - previously it was empty string, or
empty array depending on the input type.

### Bug Fixes

* payload includes also empty string ([e2789c2](https://github.com/brunoscopelliti/@bscop/use-form/commits/e2789c20aa835bba6a6f5cf323d377334460efa0))

### [1.1.1](https://github.com/brunoscopelliti/@bscop/use-form/compare/v1.1.0...v1.1.1) (2021-12-29)


### Bug Fixes

* fix few minor problems, and improve typings with generic ([90870ef](https://github.com/brunoscopelliti/@bscop/use-form/commits/90870ef0c272b1efef9fe19ab4f9ab15feb18d84))

## [1.1.0](https://github.com/brunoscopelliti/@bscop/use-form/compare/v1.0.1...v1.1.0) (2021-09-27)


### Features

* add defaultValue ([9269369](https://github.com/brunoscopelliti/@bscop/use-form/commits/92693692844c7d766966a84d019c7a9296464acf))

### [1.0.1](https://github.com/brunoscopelliti/@bscop/use-form/compare/v1.0.0...v1.0.1) (2021-09-26)


### Bug Fixes

* runtime exception when field schema is not defined ([a9b4872](https://github.com/brunoscopelliti/@bscop/use-form/commits/a9b487263a690391bb71177ae68e90530c5c7c30))

## 1.0.0 (2021-09-21)


### Features

* add debug helper ([8b68e91](https://github.com/brunoscopelliti/@bscop/use-form/commits/8b68e913bf774163c3310a93c5d4f103b982fab0))
* add various validation rules ([2d9a877](https://github.com/brunoscopelliti/@bscop/use-form/commits/2d9a877ee2605d707d0ac253d72d1a457a94f21d))
* controls select[multiple] ([c7f6240](https://github.com/brunoscopelliti/@bscop/use-form/commits/c7f6240983d7f5e0cccf76b2966bb3c04fd4a436))
* draft of the hook api ([6d8e8e4](https://github.com/brunoscopelliti/@bscop/use-form/commits/6d8e8e43ae9b8367bfb3080ce99a9644bea3139d))
* draft unregister field ([625f630](https://github.com/brunoscopelliti/@bscop/use-form/commits/625f630d4b91be2fb7ddf1f87fa6f78a64f327d9))
* draft validation on submit ([c0f8778](https://github.com/brunoscopelliti/@bscop/use-form/commits/c0f8778fc10070d6ee824af05f6ce00b42184943))
* forceValue ([622c0c8](https://github.com/brunoscopelliti/@bscop/use-form/commits/622c0c81014a25b7d0eebf2ee438e3a9a98b813c))
* handle checkbox's multiple value ([67dd5fb](https://github.com/brunoscopelliti/@bscop/use-form/commits/67dd5fb496cc9a67018167d7feb167049a2ad23f))
* improve debug format ([1749ae0](https://github.com/brunoscopelliti/@bscop/use-form/commits/1749ae05019a34b2cdd5b47f76cbce4dfe15a878))
* improve validation error ([4a9076a](https://github.com/brunoscopelliti/@bscop/use-form/commits/4a9076a1efa71783a12125df9ba4c214a4b019ac))
* render default value for input text ([29a265b](https://github.com/brunoscopelliti/@bscop/use-form/commits/29a265b8f832fc30368ee2b7659a5531a3e07467))
* reset form ([3c6a33b](https://github.com/brunoscopelliti/@bscop/use-form/commits/3c6a33b1565f96b4a3cb3679e9d374e8d29befa2))
* validate onblur ([45d9571](https://github.com/brunoscopelliti/@bscop/use-form/commits/45d9571c9ebcaa5c2c023adc103a32dbdacbabdc))
