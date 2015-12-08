angular.module('coreMod')
	.controller('ConfigController', function($scope){
		$scope.edit = function(){
			$('#editor').toggleClass('visible-block');
		};
	});