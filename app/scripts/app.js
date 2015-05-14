/* global app:true */
/* exported app */
'use strict';

/**
 * @ngdoc overview
 * @name ngNewsApp
 * @description
 * # ngNewsApp
 *
 * Main module of the application.
 */
var app = angular
	.module( 'ngNewsApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	] )
	.config( function ($routeProvider) {
		$routeProvider
			.when( '/', {
				templateUrl: 'views/main.html',
				controller : 'MainCtrl'
			} )
			.when( '/about', {
				templateUrl: 'views/about.html',
				controller : 'AboutCtrl'
			} )
			.otherwise( {
				redirectTo: '/'
			} );
	} );
