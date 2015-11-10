angular.module('coreMod')
	.controller('MailchimpController', function($scope){
		$scope.popover = function(){
			$('div.email-signup').toggleClass('visible-block');
		};
	});