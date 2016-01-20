angular.module('slidesMod')
	.controller('SlidesController', ['$scope', '$http', function($scope, $http){
		$scope.filepath = 'app/modules/slides/healthscore.json';
		$scope.images = [];
		$http.get($scope.filepath).then(
			function success(response){
				//success callbacks
				$scope.images = response.data;
				console.log("Slides: " + $scope.images);
			},
			function error(response){
				//error callbacks
				$scope.images = response.data;
				$scope.errors = response.error;
				console.log(
					"Slides: " + $scope.images + "\n",
					"Errors: " + $scope.errors
				);
			}
		);

	}])
;