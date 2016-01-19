angular.module('slidesMod')
	.directive('slides', function($timeout){
		return {
			restrict: 'E',
			replace: true,
			scope: {slideshow: '='},
			templateUrl: '/paradata/app/modules/slides/slides.html',
			controller: 'SlidesController',
			link: slideChange
		};
	});