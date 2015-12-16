angular.module('coreMod')
	.controller('ConfigController', function($scope){
		var configure = false;
		var configureToggle = function(){
			configure = !configure;
			console.log(configure);
		};
		$scope.edit = false;
	});