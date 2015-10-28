// Copyright 2015 Finix. All rights reserved.

angular.module('chimeraMod', [])
	.controller('ChimeraController', ['$scope', '$routeParams', function($scope, $routeParams){
		$scope.contents = 'app/pages/'+$routeParams.chimera+'/'+$routeParams.chimera+'.js';
		$scope.template = 'app/pages/'+$routeParams.chimera+'/'+$routeParams.chimera+'.html';
//		$scope.controller = 'app/modules/'+$routeParams.chimera+'/'+$routeParams.chimera+'-ctrl.js';
//		$scope.directive = 'app/modules/'+$routeParams.chimera+'/'+$routeParams.chimera+'-drv.js';
//		$scope.service = 'app/modules/'+$routeParams.chimera+'/'+$routeParams.chimera+'-srv.js';
	}]);