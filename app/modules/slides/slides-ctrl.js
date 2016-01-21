angular.module('slidesMod')
	.controller('SlidesController', ['$scope', '$http', function($scope, $http){
		$scope.filepath = 'app/modules/slides/healthscore.json';
		$scope.slides = [];
		$scope.currentIndex = 0;
		$http.get($scope.filepath).then(
			function success(response){
				//success callbacks
				$scope.slides = response.data;
				console.log("Slides: " + $scope.slides);
				for(var i = 0; i < $scope.slides.length; i++){
					$scope.slides[i].index = i;
					$scope.slides[i].visible = false;
					console.log(
						$scope.slides[i].index + "\n",
						"Slide visible: " + $scope.slides[i].visible
					);
				};
				$scope.selectIndex = function(index){
					$scope.currentIndex = index;
				};
				$scope.isCurrentSlideIndex = function(index) {
					return $scope.currentIndex === index;
				};
				$scope.next = function(){
					$scope.currentIndex < $scope.slides.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
				};
				$scope.prev = function(){
					$scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.slides.length - 1;
				};
				$scope.$watch('currentIndex', function(){
					$scope.slides[$scope.currentIndex].visible = true;
					console.log($scope.slides[$scope.currentIndex].visible);
				});
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