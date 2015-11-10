angular.module('coreMod')
	.controller('BoxController', function($scope){
		$scope.popover = function(){
			$('div.box-upload').toggleClass('visible-block');
		};
	});