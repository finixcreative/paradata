angular.module('coreMod')
	.controller('ConfigController', function($scope){
		var configure = this;
		configure.open = true;
		$scope.edit = false;
		$scope.configToggle = function(){
			configure.open = !configure.open;
			console.log(configure.open);
		};
		/*
		function configureToggle(){
			if($scope.configure == false){
				configure = true;
			} else {
				configure = false;
			};
			console.log(configure);
		};
		*/
	});