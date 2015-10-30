angular.module('coreMod')
	.directive('mailchimp', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/mailchimp/mailchimp.html',
		};
	});