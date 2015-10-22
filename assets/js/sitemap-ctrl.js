angular.module('coreMod')
	.controller('SitemapController', ['$scope', '$routeParams', function($scope, $routeParams){
		this.sitemap = sitemap;
		var page = $routeParams.page;
	}]);