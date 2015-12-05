// Copyright 2015 Finix. All rights reserved.

angular.module('chimeraMod', [])
	.controller('ChimeraController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		var chimera = $routeParams.chimera;
		var pageData = 'app/contents/'+chimera+'.json';
		$scope.template = 'app/pages/'+chimera+'/'+chimera+'.html';
		$scope.contents = [];
		$scope.errors = [];
		$http.get(pageData).then(function success(response){
			//success callbacks
			$scope.contents = response.data;
			console.log(
				"Chimera: " + chimera + "\n",
				"Page URL: " + pageData + "\n",
				"Template URL: " + $scope.template + "\n",
				"Page Name: " + $scope.contents[0].config.title + "\n",
				"Contents: " + $scope.contents[0].contents
			);
			for(var i = 0; i < $scope.contents[0].contents.length; i++){
				console.log(
					"Widget " + (i + 1) + " of " + $scope.contents[0].contents.length + "\n",
					"-> type " + $scope.contents[0].contents[i].config.type + "\n",
					"-> contains " + $scope.contents[0].contents[i].contents.length + " components."
				);
			};
		}, function error(response){
			//error callbacks
			$scope.contents = response.data;
			$scope.errors = response.error;
			console.log(
				"Chimera: " + chimera + "\n",
				"Page URL: " + pageData + "\n",
				"Template URL: " + $scope.template + "\n",
				"Contents: " + $scope.contents[0].contents + "\n",
				"Errors: " + $scope.errors
			);
		});
	}]);