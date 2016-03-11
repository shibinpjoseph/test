app.controller('myCtrl', function($scope) {

	$scope.firstName = "shibin";
	$scope.lastName = "joseph";
	$scope.fullName = function() {
		return $scope.firstName + " " + $scope.lastName;
	};
	$scope.myArray = ["test 1", "test 2", "test 3"];
	$scope.testScope = "check scope value";
})
