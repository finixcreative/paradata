angular.module('coreMod')
	.controller('ConfigController', function($scope){
		$scope.edit = function(){
			$('form.config').toggleClass('visible-block');
		};
	});