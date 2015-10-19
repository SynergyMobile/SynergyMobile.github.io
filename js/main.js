var app = angular.module('SynergyWay', ['ngRoute', 'hljs']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'html/main.html', controller: 'PageCtrl'})
        .when('/guides', {templateUrl: 'html/guides/guides.html', controller: 'PageCtrl'})
        .when('/practices', {templateUrl: 'html/practices/practices.html', controller: 'PageCtrl'});
}]);

app.controller('PageCtrl', function () {});