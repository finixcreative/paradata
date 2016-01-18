function fetchModel($scope, $http, key){
	var name = key;
	$scope.filepath = 'assets/js/' + name + '.json';
	$scope.name = [];
	$http.get($scope.filepath).then(
		function success(response){
			//success callbacks
			$scope.name = response.data;
			console.log(name + ": " + $scope.name);
		},
		function error(response){
			//error callbacks
			$scope.name = response.data;
			$scope.errors = response.error;
			console.log(
				name + ": " + $scope.name + "\n",
				"Errors: " + $scope.errors
			);
		}
	);
};