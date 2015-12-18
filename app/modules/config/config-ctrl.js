angular.module('coreMod')
	.controller('ConfigController', function($scope){
		$scope = {
			configure: true,
			edit: false,
			configToggle: function(){
				configure = !configure;
				console.log(configure);
				return configure;
			}
		};
		console.log(
			$scope.configure + "\n",
			$scope.edit
		);
	});