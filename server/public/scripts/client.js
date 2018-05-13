console.log('client is loaded');

var app = angular.module('TimeApp', ['ngRoute', 'ngMaterial']);

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