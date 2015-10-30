angular.module('paraData')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/:chimera', {
				templateUrl: 'app/modules/chimera/chimera.html',
				controller: 'ChimeraController',
			})
			.otherwise({
				redirectTo: '/home',
			});
	}]);