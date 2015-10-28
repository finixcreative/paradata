angular.module('slidesMod')
	.controller('SlidesController', ['$scope', 'Slides', 'Template', function($scope, Slides, Template){
		$scope.images = Slides.load();
		$scope.slider = Template();
//		$scope.slider = 'app/modules/slides/'+$scope.slider+'.html';
	}]);