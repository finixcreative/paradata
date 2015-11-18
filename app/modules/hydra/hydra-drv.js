angular.module('hydraMod', [])
	.directive('hydra', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/modules/hydra/hydra.html',
		};
	});