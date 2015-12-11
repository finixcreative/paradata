angular.module('coreMod')
	.controller('ConfigController', function($scope){
		$scope.edit = false;
		var config = false;
		var configPanel = function(){
			if(config == false){
				config = true;
				return console.log("Config is active");
			} else {
				config = false;
				return console.log("Config is inactive");
			};
		};
	});