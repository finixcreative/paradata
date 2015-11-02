angular.module('coreMod')
	.controller('MailchimpController', function($scope){
		$scope.open = function(){
			$('.email-signup').classList.add('visible-block');
		};
		$scope.close = function(){
			$('.email-signup').classList.remove('visible-block');
		};
	});