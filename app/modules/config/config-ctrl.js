angular.module('coreMod')
	.controller('ConfigController', [$scope, function($scope){
		$scope.config = false;
		$scope.edit = false;
	}]);