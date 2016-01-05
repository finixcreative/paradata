// Copyright 2015 Finix. All rights reserved.

angular.module('hydraMod')
	.controller('HydraController', function($scope){
		$scope.edit = false;
		$scope.configtype = function($scope){
			if ($scope.content.config.type == "h1" || "h2" || "h3" || "h4" || "h5" || "h6"){
				return "configheadline";
			} else if ($scope.content.config.type == "p"){
				return "configtext";
			} else if ($scope.content.config.type == "img"){
				return "configimg";
			} else {
				return null;
			};
		};
		/*
		$scope.saveChanges = function(){
			var data = $.param({
				json: JSON.stringify({
					name: $scope.newName
				})
			});
			$http.post("/echo/json/", data).success(function(data, status) {
				$scope.hello = data;
			})
		};
		*/
	})
;