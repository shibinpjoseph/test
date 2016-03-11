app.controller('myList', function ($scope) {
	$scope.name = 'my list';

	$scope.list = ["milk", "sope", "tea"];

	$scope.addItem = function () {
		if($scope.newItem){
			if($scope.list.indexOf($scope.newItem) == -1){
				$scope.list.push($scope.newItem);
			}
			else{
				$scope.errormessage = "Item already exist";
			}
		}
		else{
			$scope.errormessage = "Field is empty";
		}
	}

	$scope.removeItem = function(x) {
		$scope.list.splice(x, 1);
	};
})
