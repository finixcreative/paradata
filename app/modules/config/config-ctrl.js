angular.module('coreMod')
	.controller('ConfigController', function($scope){
		var config = false;
		function configToggle(){
			config = !config;
			console.log(config);
		};
		$scope.edit = false;
	});