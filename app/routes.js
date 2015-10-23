angular.module('paraData')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
/*			.when('/home', {
				templateUrl: 'app/pages/home/home.html',
			})
*/			.when('/:page', {
				templateUrl: 'app/modules/chimera/chimera.html',
				controller: 'SitemapController',
				controllerAs: 'sitemap',
			})
			.otherwise({
				redirectTo: '/home',
			});
	}]);