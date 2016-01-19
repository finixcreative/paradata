angular.module('slidesMod')
	.controller('SlidesController', ['$scope', '$http', '$attr', function($scope, $http, $attr){
		$scope.slideshow = $attr.slideshow;
		$scope.filepath = 'app/modules/slides/' + $scope.slideshow + '.json';
		$scope.slides = [];
		$http.get($scope.filepath).then(
			function success(response){
				//success callbacks
				$scope.slides = response.data;
				console.log("Slides: " + $scope.slides);
			},
			function error(response){
				//error callbacks
				$scope.slides = response.data;
				$scope.errors = response.error;
				console.log(
					"Slides: " + $scope.slides + "\n",
					"Errors: " + $scope.errors
				);
			}
		);
	}])
;