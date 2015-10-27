angular.module('slidesMod', ['ngAnimate', 'ngTouch', 'ngResource'])
	.factory('Slides', ['$resource', function($resource){
		return $resource('app/modules/slides/:slides.json', {}, {
			params: {slides: '='},
			method: 'GET',
			isArray: true
		});
	}]);