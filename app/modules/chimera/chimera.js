// Copyright 2015 Finix. All rights reserved.

angular.module('chimeraMod', [])
	.controller('ChimeraController', ['$scope', '$routeParams', function($scope, $routeParams){
		var root = 'app/pages/';
		var chimera = $routeParams.chimera;
		var templateExtension = 'html';
		var contentsExtension = 'js';
		$scope.template = root+chimera+'/'+chimera+'.'+templateExtension;
		$scope.contents = root+chimera+'/'+chimera+'.'+contentsExtension;
	}]);