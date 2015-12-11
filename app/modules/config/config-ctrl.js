angular.module('coreMod')
	.controller('ConfigController', function($scope){
		var config = false;
		$scope.edit = false;
		$scope.configPanel = function(){
			if(config == false){
				config = true;
			} else {
				config = false;
			};
			return config;
			return console.log("Config is " + config);
		};
	});