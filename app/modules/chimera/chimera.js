// Copyright 2015 Finix. All rights reserved.

angular.module('chimeraMod', [])
	.controller('ChimeraController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		var chimera = $routeParams.chimera;
		var root = 'app/pages/';
		var page = 'app/contents/'+chimera+'.json';
		$scope.template = root+chimera+'/'+chimera+'.html';
		$scope.contents = [];
		$scope.errors = [];
		$http.get(page).then(function success(response){
			//success callbacks
			$scope.contents = response.data;
			console.log(
				"Chimera: " + chimera + "\n",
				"Page URL: " + page + "\n",
				"Template URL: " + $scope.template + "\n",
				"Page Name: " + $scope.contents.config.title + "\n",
				"Contents: " + $scope.contents.contents
			);
			for(var i = 0; i < $scope.contents.contents.length; i++){
				console.log(
					"Widget " + (i + 1) + " of " + $scope.contents.contents.length + "\n",
					"-> type " + $scope.contents.contents[i].config.type + "\n",
					"-> contains " + $scope.contents.contents[i].contents.length + " objects."
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