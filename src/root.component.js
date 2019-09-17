angular
  .module('spa-module-ng1')
  .component('rootNg1', {
    template: `
    <h1>This is AngularJS project</h1>
    <button type="button" ng-click="$ctrl.test()">Fetch 10 request</button>
  `,
    controller: RootCtrl
  });

function RootCtrl($http) {

  this.test = function () {
    for (let index = 0; index < 10; index++) {
      console.log('Fetch getData - ' + index);
      $http.post('http://localhost:8080/api/getData', { times: index })
        .then(arg => console.log(arg));
    }
  };

}

RootCtrl.$inject = ['$http'];