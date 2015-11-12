// Copyright 2015 Finix. All rights reserved.

angular.module('chimeraMod', [])
	.controller('ChimeraController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		var chimera = $routeParams.chimera;
		var root = 'app/pages/';
		var page = root+chimera+'/'+chimera+'.json';
		$scope.template = root+chimera+'/'+chimera+'.html';
		$http.get(page)
			.success(function(data, status, headers, config){
				$scope.contents = data;
			})
			.error(function(data, status, headers, config){
				console.log(data) // log error
			});
	}]);