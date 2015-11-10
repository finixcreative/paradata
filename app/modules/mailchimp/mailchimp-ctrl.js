angular.module('coreMod')
	.controller('MailchimpController', function($scope){
		$scope.popover = function(target){
			$(target).toggleClass('visible-block');
		};
	});