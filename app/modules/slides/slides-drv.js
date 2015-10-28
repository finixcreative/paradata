angular.module('slidesMod')
	.directive('slider', function ($timeout){
		return {
			restrict: 'E',
			replace: true,
			scope: {slides: '='},
			templateUrl: 'app/modules/slides/slides.html',
			controller: 'SlidesController',
			controllerAs: 'slides',
			link: slideChange,
		};
	});