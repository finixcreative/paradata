angular.module('hydraMod', [])
	.directive('hydra', function(){
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'app/modules/hydra/hydra.html',
		};
	});