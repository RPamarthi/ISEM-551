

// create the module and name it scotchApp
var myAngularApp = angular.module('myAngularApp', ['ngRoute']);

// configure our routes
myAngularApp.config(function ($routeProvider) {
    $routeProvider

        // route to home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route to about page
        .when('/about', {
            templateUrl: 'pages/aboutUs.html',
            controller: 'aboutController'
        })

        // route to contact page
        .when('/contact', {
            templateUrl: 'pages/contactUs.html',
            controller: 'contactController'
        });
});

// create the controller and inject Angular's $scope
myAngularApp.controller('mainController', function ($scope) {
    $scope.message = 'Home Page';
});

myAngularApp.controller('aboutController', function ($scope) {
    $scope.message = 'WORK IN PROGRESS !';
});

myAngularApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! . This is just a demo.';
});