angular.module('slidesMod')
	.controller('SlidesController', function($scope){
//		$scope.images = images;
		$scope.template = 'app/modules/slides/'+$scope.template+'.html';		
	});