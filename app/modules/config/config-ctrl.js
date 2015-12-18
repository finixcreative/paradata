angular.module('coreMod')
	.controller('ConfigController', function($scope){
		$scope.configure = false;
		$scope.edit = false;
		$scope.configToggle = function(){
			$scope.configure = !$scope.configure;
			console.log($scope.configure);
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