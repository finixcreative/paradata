angular.module('slidesMod')
	.directive('slides', function ($timeout){
		return {
			restrict: 'E',
			replace: true,
			scope: {images: '='},
			templateUrl: '/paradata/app/modules/slides/slides.html',
			controller: 'SlidesController',
			controllerAs: 'slides',
			link: function (scope, elem, attrs){
				scope.currentIndex = 0;
				for(var i = 0; i < scope.images.length; i++){
					scope.images.index = i;
				};
				scope.selectIndex = function(index){
					scope.currentIndex = index;
				};
				scope.next = function(){
					scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
				};
				scope.prev = function(){
					scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
				};
				scope.$watch('currentIndex', function() {
					scope.images.forEach(function(image) {
						image.visible = false;
					});
					scope.images[scope.currentIndex].visible = true;
				});
				var timer;
				var sliderFunc = function() {
					timer = $timeout(function() {
						scope.next();
						timer = $timeout(sliderFunc, 5000);
					}, 5000);
				};
				sliderFunc();
				scope.$on('$destroy', function() {
					$timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
				});
			},
		};
	});