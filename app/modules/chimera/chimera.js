// Copyright 2015 Finix. All rights reserved.

angular.module('chimeraMod', [])
	.controller('ChimeraController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		var chimera = $routeParams.chimera;
		var root = 'app/pages/';
		var page = 'app/contents/'+chimera+'.json';
		$scope.template = root+chimera+'/'+chimera+'.html';
		$http.get(page).success(function(data, status, headers, config){
			$scope.contents = data;
			if($scope.contents.length > 0){
				console.log("Contents detected: length is " + $scope.contents.length);
			} else {
				console.log("Error detected: length is " + $scope.contents.length);				
			};
			console.log("Contents: " + $scope.contents);
		});
		console.log("Page: " + chimera);
		console.log("Template: " + $scope.template);
	}]);