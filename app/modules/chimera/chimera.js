// Copyright 2015 Finix. All rights reserved.

angular.module('chimeraMod', [])
	.controller('ChimeraController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		var chimera = $routeParams.chimera;
		var page = 'app/contents/'+chimera+'.json';
		$scope.template = 'app/pages/'+chimera+'/'+chimera+'.html';
		$scope.contents = [];
		$scope.errors = [];
		$http.get(page).then(function success(response){
			//success callbacks
			$scope.page = response.data;
			console.log(
				"Chimera: " + chimera + "\n",
				"Page URL: " + page + "\n",
				"Template URL: " + $scope.template + "\n",
				"Page Name: " + $scope.page.config.title + "\n",
				"Contents: " + $scope.page.contents
			);
			for(var i = 0; i < $scope.page.contents.length; i++){
				console.log(
					"Widget " + (i + 1) + " of " + $scope.page.contents.length + "\n",
					"-> type " + $scope.page.contents[i].config.type + "\n",
					"-> contains " + $scope.page.contents[i].contents.length + " components."
				);
			};
		}, function error(response){
			//error callbacks
			$scope.contents = response.data;
			$scope.errors = response.error;
			console.log(
				"Chimera: " + chimera + "\n",
				"Page URL: " + page + "\n",
				"Template URL: " + $scope.template + "\n",
				"Contents: " + $scope.contents + "\n",
				"Errors: " + $scope.errors
			);
		});
	}]);