console.log('client is loaded');

var app = angular.module('TimeApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/entry.html',
        controller: 'EntryController as vm'
    }).when('/projects', {
        templateUrl: '/views/projects.html',
        controller: 'ProjectsController as vm'
    }).when('/reports', {
        templateUrl: '/views/reports.html',
        controller: 'ReportsController as vm'
    }).otherwise({
        templateUrl: '<h1>404</h1>'
    });
}]);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('orange')

  });