console.log('client is loaded');

var app = angular.module('TimeApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).when('/projects', {
        templateUrl: '/views/power.html',
        controller: 'ProjectsController as vm'
    }).when('/reports', {
        templateUrl: '/views/power.html',
        controller: 'ReportsController as vm'
    }).otherwise({
        templateUrl: '<h1>404</h1>'
    });
});