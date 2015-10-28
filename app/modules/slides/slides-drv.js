angular.module('slidesMod')
	.directive('slides', function ($timeout){
		return {
			restrict: 'E',
			replace: true,
			scope: {images: '='},
			templateUrl: scope.template,
			controller: 'SlidesController',
			controllerAs: 'slides',
			link: slideChange,
		};
	});