angular.module('slidesMod', ['ngAnimate', 'ngTouch'])
	.directive('slides', function($timeout){
		return {
			restrict: 'E',
			replace: true,
			scope: {slideshow: '='},
			templateUrl: '/paradata/app/modules/slides/slides.html',
			controller: 'SlidesController'
			link: function($scope, element, attrs){
				$scope.slideshow = attrs.slideshow;
				console.log($scope.slideshow);
				fetch();
			}
		};
	})
;