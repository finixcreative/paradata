angular.module('coreMod')
	.directive('contact', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/contact/contact.html',
			controller: 'ClientController'
		};
	})
;