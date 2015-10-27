angular.module('slidesMod')
	.controller('SlidesController', function($scope){
		$scope.images = Slides();
		$scope.slider = Template();
//		$scope.slider = 'app/modules/slides/'+$scope.slider+'.html';
	});