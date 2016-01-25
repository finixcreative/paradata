function fetchContents($scope, $element, $attrs){
	console.log($attrs.slideshow);
	$scope.filepath = 'app/modules/slides/slides-' + $attrs.slideshow + '.json';
	console.log("Directive Success: " + $scope.filepath);
	fetch($scope.filepath);
};