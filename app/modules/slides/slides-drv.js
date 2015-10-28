angular.module('slidesMod')
	.directive('slides', function ($timeout){
		return {
			restrict: 'E',
			replace: true,
			scope: {images: '='},
			templateUrl: '/paradata/app/modules/slides/slides.html',
			controller: 'SlidesController',
			controllerAs: 'slides',
			link: slideChange,
		};
	});