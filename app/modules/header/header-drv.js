angular.module('coreMod')
	.directive('appheader', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/header/header.html'
		};
	});