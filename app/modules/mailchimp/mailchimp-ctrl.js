angular.module('coreMod')
	.controller('MailchimpController', function($scope){
		$scope.popover = function(){
			$('div.email-signup').toggleClass('visible-block');
//			document.getElementsByClassName('email-signup').classList.add('visible-block');
		};
/*		$scope.close = function(){
			document.getElementsByClassName('email-signup').classList.remove('visible-block');
		}; */
	});