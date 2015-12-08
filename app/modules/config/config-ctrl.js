angular.module('coreMod')
	.controller('ConfigController', function($scope){
		$scope.edit = function(){
			$('div.edit').toggleClass('visible-block');
		};
	});