angular.module('coreMod')
	.directive('navigation', function(){
		return {
			restrict: 'E',
			templateUrl: '/paradata/app/modules/nav/nav.html',
			controller: 'SitemapController',
			controllerAs: 'sitemap',
		};
	});