angular.module('coreMod')
	.controller('SitemapController', ['$scope', '$routeParams', function($scope, $routeParams){
		this.sitemap = sitemap;
		scope.page = 'app/pages/'+$routeParams.page+'/'+$routeParams.page+'.html';
	}]);