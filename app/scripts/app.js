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
		'ngTouch',
		'firebase'
	] )
	.config( function ($routeProvider) {
		$routeProvider
			.when( '/', {
				templateUrl: 'views/posts.html',
				controller : 'PostsCtrl'
			} )
			.when( '/posts/:postId', {
				templateUrl: 'views/showpost.html',
				controller : 'PostViewCtrl'
			} )
			.when( '/register', {
				templateUrl: 'views/register.html',
				controller : 'AuthCtrl',
				resolve    : {
					user: function (Auth) {
						return Auth.resolveUser();
					}
				}
			} )
			.when( '/login', {
				templateUrl: 'views/login.html',
				controller : 'AuthCtrl',
				resolve    : {
					user: function (Auth) {
						return Auth.resolveUser();
					}
				}
			} )
			.otherwise( {
				redirectTo: '/'
			} );
	} )
	.constant( 'FIREBASE_URL', 'https:https://blinding-inferno-9424.firebaseio.com/' );


