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
			"configure: " + $scope.configure + "\n",
			"edit: " + $scope.edit + "\n",
			"configToggle: " + $scope.configToggle()
		);
	});