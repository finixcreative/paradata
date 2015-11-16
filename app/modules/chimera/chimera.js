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
				"Contents: " + $scope.contents + "\n",
				"Object 1: " + $scope.contents[0].field1 + "\n",
				"Object 2: " + $scope.contents[1].field1 + "\n",
				"Object 3: " + $scope.contents[2].field1
			);
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
		/*
		.get(page).success(function(data, status, headers, config){
			$scope.contents = data;
			if($scope.contents.length > 0){
				console.log("Contents detected: length is " + $scope.contents.length);
			} else {
				console.log("Error detected: length is " + $scope.contents.length);				
			};
			return $scope.contents;
		});
		console.log("Page: " + chimera);
		console.log("Template: " + $scope.template);
		console.log("Contents: " + $scope.contents);
		*/
	}]);