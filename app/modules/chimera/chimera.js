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
			//$scope.widget = $scope.contents.rows.widget.type + '.html';
			console.log(
				"Chimera: " + chimera + "\n",
				"Page URL: " + page + "\n",
				"Template URL: " + $scope.template + "\n",
				"Page Name: " + $scope.contents.page + "\n",
				"Contents: " + $scope.contents.rows + "\n",
				"Rows: " + $scope.contents.rows.length
			);
			for(var i = 0; i < $scope.contents.rows.length; i++){
				console.log("Row " + (i + 1) + " # of Widgets: " + $scope.contents.rows[i].widgets.length);
				for (widget in $scope.contents.rows[i].widgets){
					console.log($scope.contents.rows[i].widget.type + "\n");
				};
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