'use strict';

var scapp = angular.module('scustomer',['ui.router']);
scapp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('app',{
		url:'/',
		templateUrl:'app.html',
		controller:'sCustCtrl'
	});
}).run(function(){});
