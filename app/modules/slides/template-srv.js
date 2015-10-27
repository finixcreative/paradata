angular.module('slidesMod')
	.factory('Template', ['$resource', function($resource){
		return $resource('app/modules/slides/:template.html', {}, {
			params: {template: '='},
			method: 'GET',
		});
	}]);