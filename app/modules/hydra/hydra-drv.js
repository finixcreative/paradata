// Copyright 2015 Finix. All rights reserved.

angular.module('hydraMod', [])
	.directive('hydra', function(){
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			templateUrl: 'app/modules/hydra/hydra.html',
		};
	});