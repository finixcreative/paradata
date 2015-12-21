angular.module('coreMod')
	.controller('ConfigController', function($scope){
		var configToggle = [],
		$scope = {
			configure: true,
			edit: false
		};
		configToggle = function($scope){
			$scope.configure = !$scope.configure;
			console.log(
				"configure: " + $scope.configure + "\n",
				"edit: " + $scope.edit + "\n",
				"configToggle: " + configToggle()
			);
			return $scope.configure;
		};
	});