import singleSpaAngularJS from 'single-spa-angularjs';

const domElementGetter = () => document.getElementById('angularjs-mixin');

const angularLifecycles = singleSpaAngularJS({
  angular: window.angular,
  domElementGetter,
  mainAngularModule: 'legacy-app',
  preserveGlobal: true,
  template: '<root-ng1-legacy />',
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

