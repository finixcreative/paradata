angular.module('coreMod')
	.directive('appfooter', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/footer/footer.html'
		};
	});