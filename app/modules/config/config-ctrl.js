angular.module('coreMod')
	.controller('ConfigController', function($scope){
		$scope.config = false;
		$scope.edit = false;
		$scope.configPanel = function(){
			if($scope.config == false){
				$scope.config = true;
			} else {
				$scope.config = false;
			};
			return $scope.config;
			return console.log("Config is " + $scope.config);
		};
	});