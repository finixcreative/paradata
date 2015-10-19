angular.module('coreMod')
	.directive('copyright', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/copyright/copyright.html',
			controller: 'ClientController',
			controllerAs: 'client',
		};
	});