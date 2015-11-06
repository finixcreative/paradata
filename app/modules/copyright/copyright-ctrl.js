angular.module('coreMod')
	.controller('CopyrightController', function($scope){
		var today = new Date();
		var year = today.getFullYear();
		$scope.copyright = year;
	});