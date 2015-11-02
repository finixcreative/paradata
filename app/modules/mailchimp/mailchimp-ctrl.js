angular.module('coreMod')
	.controller('MailchimpController', function($scope){
		$scope.open = function(){
			document.getElementsByClassName('email-signup').classList.add('visible-block');
		};
		$scope.close = function(){
			document.getElementsByClassName('email-signup').classList.remove('visible-block');
		};
	});