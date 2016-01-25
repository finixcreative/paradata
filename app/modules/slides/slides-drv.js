angular.module('slidesMod', ['ngAnimate', 'ngTouch'])
	.directive('slides', function($timeout){
		return {
			restrict: 'E',
			replace: true,
			scope: {slideshow: '='},
			templateUrl: '/paradata/app/modules/slides/slides.html',
			controller: 'SlidesController',
			link: function($scope, $element, $attrs){
				console.log($attrs.slideshow);
				$scope.filepath = 'app/modules/slides/slides-' + $attrs.slideshow + '.json';
				console.log("Directive: " + $scope.filepath);
				fetch($scope.filepath);
			}
		};
	})
;