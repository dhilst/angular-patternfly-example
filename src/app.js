var angular = require('angular');

// Patternfly deps
require('jquery');
require('patternfly');
require('angular-route');
require('angular-patternfly');

var app = angular.module('PfHelloWorldApp', [
    'patterfly',
    'patternfly.charts',
    'patternfly.table',
    'ngRoute',    
]);
module.exports = app;

var template1 = require('ngtemplate-loader!html-loader!./views/template1.html');
var template2 = require('ngtemplate-loader!html-loader!./views/template2.html');
var error404  = require('ngtemplate-loader!html-loader!./views/404.html')

app.config(function($routeProvider){
    $routeProvider.when('/view1', { controller: 'MyController1', templateUrl: template1 });
    $routeProvider.when('/view2', { controller: 'MyController2', templateUrl: template2 });
    $routeProvider.otherwise({ templateUrl: error404 });
});

require('./controllers/controller1');
require('./controllers/controller2');
