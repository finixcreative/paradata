angular.module('coreMod', [])
	.controller('ClientController', ['$scope', '$http', function($scope, $http){
		var filepath = 'assets/js/client.json';
		$scope.client = [];
		$http.get(filepath).then(
			function success(response){
				//success callbacks
				$scope.client = response.data;
				console.log("Client: " + $scope.client);
			},
			function error(response){
				//error callbacks
				$scope.client = response.data;
				$scope.errors = response.error;
				console.log(
					"Client: " + $scope.client + "\n",
					"Errors: " + $scope.errors
				);
			}
		);
	}])
;