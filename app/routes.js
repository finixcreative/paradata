angular.module('paraData')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/:page', {
				templateUrl: 'app/modules/chimera/chimera.html',
				controller: 'SitemapController',
			})
			.otherwise({
				redirectTo: '/home',
			});
	}]);