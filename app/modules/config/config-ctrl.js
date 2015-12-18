angular.module('coreMod')
	.controller('ConfigController', function($scope){
		$scope.configure = true;
		$scope.edit = false;
		$scope.configToggle = function($scope){
			$scope.configure = !$scope.configure;
			console.log($scope.configure);
			return $scope.configure;
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