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
			.when('/',{
				templateUrl: 'views/posts.html',
				controller: 'PostsCtrl'
			})
			.otherwise( {
				redirectTo: '/'
			} );
	} );


