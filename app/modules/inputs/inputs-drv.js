angular.module('coreMod')
	.directive('textsize', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/inputs/textsize.html',
		};
	})
	.directive('writeheadline', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/inputs/text-size.html',
		};
	})
	.directive('writebody', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/inputs/textedit.html',
		};
	})
;