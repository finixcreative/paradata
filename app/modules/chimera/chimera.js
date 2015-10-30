// Copyright 2015 Finix. All rights reserved.

angular.module('chimeraMod', [])
	.controller('ChimeraController', ['$scope', '$routeParams', function($scope, $routeParams){
		var chimera = $routeParams.chimera;
		var root = 'app/pages/';
		$scope.page = root+chimera+'/'+chimera+'.json';
		$scope.template = root+chimera+'/'+chimera+'.html';
	}]);