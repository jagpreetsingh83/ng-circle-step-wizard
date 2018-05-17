# CircleStepWizard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Description

An easy to use circle step wizard that can help user undestand the progress and steps involved in the process

## Demo

![Steps](https://raw.githubusercontent.com/jagpreetsingh83/ng-circle-step-wizard/master/src/assets/steps.png '5 Step Circle Wizard')

## Usage

```html
<app-circle-step [steps]="['Step 1','Step 2','Step 3', 'Step 4', 'Step 5']" [active]="2"></app-circle-step>
```

## SASS Variables to override

```scss
// Colors
$circle-color: #e9eaea !default;
$circle-number-color: #000000 !default;
$circle-display-text-color: #333333 !default;
$circle-color-active: #da291c !default;
$circle-number-color-active: #ffffff !default;
$circle-display-text-color-active: #da291c !default;
$circle-connecting-line-color: #e9eaea !default;
// Circle Size
$step-wizard-circle-radius: 1.8rem !default;
```

## NPM

https://www.npmjs.com/package/circle-step-wizard

## Home Page

https://github.com/jagpreetsingh83/ng-circle-step-wizard

## Source Code

https://github.com/jagpreetsingh83/ng-circle-step-wizard.git

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
