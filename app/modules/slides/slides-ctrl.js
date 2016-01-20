angular.module('slidesMod')
	.controller('SlidesController', ['$scope', '$http', function($scope, $http){
		$scope.filepath = 'app/modules/slides/healthscore.json';
		$scope.slides = [];
		$http.get($scope.filepath).then(
			function success(response){
				//success callbacks
				$scope.slides = response.data;
				console.log("Slides: " + $scope.slides);
				for(var i = 0; i < $scope.slides.length; i++){
					$scope.slides[i].index = i;
					console.log($scope.slides[i].index);
				};
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
		$scope.currentIndex = 0;
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
			$scope.slides.forEach(function(slide){
				console.log($scope.slide);
				console.log($scope.slide.visible);
				$scope.slide.visible = false;
				console.log($scope.slide.visible);
			});
			console.log($scope.currentIndex);
			console.log($scope.slides);
			console.log($scope.slides[$scope.currentIndex]);
			console.log($scope.slides[$scope.currentIndex].visible);
			$scope.slides[$scope.currentIndex].visible = true;
			console.log($scope.slides[$scope.currentIndex].visible);
		});
		/*
		var autoslide = function(){
			var next = $scope.next();
			$timeout(next, 5000);
		};
		autoslide();
		*/
		var timer;
		var sliderFunc = function(){
			timer = $timeout(function(){
				$scope.next();
				timer = $timeout(sliderFunc, 5000);
			}, 5000);
		};
		sliderFunc();
		$scope.$on('$destroy', function(){
			$timeout.cancel(timer); // when the $scope is getting destroyed, cancel the timer
		});
	}])
;