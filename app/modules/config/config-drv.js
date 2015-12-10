angular.module('coreMod')
	.directive('configtext', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/configtext.html',
			controller: 'ConfigController',
			controllerAs: 'config'
		};
	})
	.directive('configimg', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/configimg.html',
			controller: 'ConfigController',
			controllerAs: 'config'
		};
	});