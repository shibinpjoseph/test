app.controller('myList', function ($scope) {
	$scope.name = 'my to do list';

	$scope.checkList = [{checklistTxt:"check box", value:false}]

	$scope.addList = function () {
		$scope.checkList.push({checklistTxt:$scope.todolist, value:false});
	}

	$scope.remove = function () {
		$scope.oldlist = $scope.checkList;
		$scope.checkList = [];

		angular.forEach($scope.oldlist, function (x) {
			if(!x.value){
				$scope.checkList.push(x);
			}
		} )

	}
})
