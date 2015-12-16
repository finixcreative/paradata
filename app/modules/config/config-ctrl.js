angular.module('coreMod')
	.controller('ConfigController', function($scope){
		var config = false;
		function configToggle(){
			if(config == false){
				config = true;
			} else {
				config = false;
			};
			console.log(config);
		};
		$scope.edit = false;
	});