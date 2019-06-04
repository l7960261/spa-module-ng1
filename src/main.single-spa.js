import singleSpaAngularJS from 'single-spa-angularjs';
import angular from 'angular';
import './app.module.js';
import './root.component.js';

const domElementGetter = () => document.getElementById('angularjs');

const angularLifecycles = singleSpaAngularJS({
  angular,
  domElementGetter,
  mainAngularModule: 'spa-module-ng1',
  preserveGlobal: false,
  template: '<root-ng1 />',
});

export const bootstrap = [
  angularLifecycles.bootstrap,
];

export const mount = [
  angularLifecycles.mount,
];

export const unmount = [
  angularLifecycles.unmount,
];

