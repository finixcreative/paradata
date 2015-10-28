angular.module('slidesMod', ['ngAnimate', 'ngTouch', 'ngResource'])
	.factory('Slides', ['$resource', '$scope', function($resource, $scope){
		return $resource('app/modules/slides/slides/:slide.json', {}, {
			load: {
				params: {slide: 'slides'},
				method: 'GET',
				isArray: true
			}
		});
	}]);