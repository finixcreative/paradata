angular.module('slidesMod')
	.controller('SlidesController', function($scope){
		$scope.images = images;
		$scope.slider = 'app/modules/slides/'+$scope.template+'.html';
	});