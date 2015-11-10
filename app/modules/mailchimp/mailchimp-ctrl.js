angular.module('coreMod')
	.controller('MailchimpController', function($scope){
		$scope.popover = function(target){
			var element = $("'."+target+"'");
			element.toggleClass('visible-block');
		};
	});