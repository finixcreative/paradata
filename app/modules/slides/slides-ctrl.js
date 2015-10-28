angular.module('slidesMod')
	.controller('SlidesController', ['$scope', 'Slides', 'Template', function($scope, Slides, Template){
		$scope.slides = Slides.load();
		$scope.template = Template();
//		$scope.slider = 'app/modules/slides/'+$scope.slider+'.html';
	}]);