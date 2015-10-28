angular.module('slidesMod', ['ngAnimate', 'ngTouch', 'ngResource'])
	.factory('Slides', ['$resource', '$scope', function($resource, $scope){
		return $resource('app/modules/slides/slides/:slide.json', {}, {
			params: {slide: $scope.images[$scope.currentIndex]},
			method: 'GET',
			isArray: true
		});
	}]);