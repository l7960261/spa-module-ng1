import angular from 'angular';
import jwtModule from 'angularjs-jwt';

angular
  .module('spa-module-ng1', [jwtModule.name])
  .config(['jwtAuthenticationProvider', function (jwtAuthenticationProvider) {
    jwtAuthenticationProvider.changeOptions({
      refreshTokenURI: 'http://localhost:8080/api/authRefresh',
    });
  }])
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('jwtInterceptor');
  }])