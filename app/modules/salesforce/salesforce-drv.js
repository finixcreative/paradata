angular.module('coreMod')
	.directive('salesforce', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/salesforce/salesforce.html'
		};
	})
;