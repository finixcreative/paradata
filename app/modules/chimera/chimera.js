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
				"Page Name: " + $scope.contents.page + "\n",
				"Contents: " + $scope.contents.rows + "\n",
				"Rows: " + $scope.contents.rows.length
			);
			for(var i = 0; i < $scope.contents.rows.length; i++){
				console.log("Row " + (i + 1) + " # of Widgets: " + $scope.contents.rows[i].widgets.length);
				for(var j = 0; j < $scope.contents.rows[i].widgets.length; j++){
					console.log("Widget " + (j + 1) + " is " + $scope.contents.rows[i].widgets[j].type);
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
	}]);