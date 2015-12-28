angular.module('coreMod')
	.directive('config', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/config.html',
			controller: 'ChimeraController',
			controllerAs: 'chimera'
		};
	})
	.directive('configtext', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/configtext.html',
			controller: 'ConfigController',
			controllerAs: 'config'
		};
	})
	.directive('configheadline', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/config/configheadline.html',
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
	})
;