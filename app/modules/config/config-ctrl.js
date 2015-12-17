angular.module('coreMod')
	.controller('ConfigController', function($scope){
		$scope.configure = false;
		$scope.edit = false;
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