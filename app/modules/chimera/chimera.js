// Copyright 2015 Finix. All rights reserved.

angular.module('chimeraMod', [])
	.controller('ChimeraController', ['$scope', '$routeParams', function($scope, $routeParams){
		var chimera = $routeParams.chimera;
		var root = 'app/pages/';
		$scope.page = function(){
			return root+chimera+'/'+chimera+'.json';
		};
		$scope.template = function(){
			return root+chimera+'/'+chimera+'.html';
		};
	}]);