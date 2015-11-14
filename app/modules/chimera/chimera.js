// Copyright 2015 Finix. All rights reserved.

angular.module('chimeraMod', [])
	.controller('ChimeraController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		var chimera = $routeParams.chimera;
		var root = 'app/pages/';
		var page = 'app/contents/'+chimera+'.json';
		$scope.template = root+chimera+'/'+chimera+'.html';
		$scope.contents = $http.get(page).success(function(data, status, headers, config){
			return data;
		}).error(function(data, status, headers, config){
			// log error
		});
		console.assert($scope.contents.length < 1, "Error detected: length is " + $scope.contents.length);
		console.assert($scope.contents.length > 0, "Contents detected: length is " + $scope.contents.length);
		console.log("Chimera: " + chimera);
		console.log("Template: " + $scope.template);
		console.log("Contents: " + $scope.contents);
	}]);