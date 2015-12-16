angular.module('coreMod')
	.controller('ConfigController', function($scope){
		var configure = false;
		function configureToggle(){
			if(configure == false){
				configure = true;
			} else {
				configure = false;
			};
			console.log(configure);
		};
		$scope.edit = false;
	});