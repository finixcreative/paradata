// Copyright 2015 Finix. All rights reserved.

angular.module('chimeraMod')
	.controller('ChimeraController', ['$scope', '$routeParams', function($scope, $routeParams){
		$scope.page = 'app/pages/'+$routeParams.chimera+'/'+$routeParams.chimera+'.html';
	}]);