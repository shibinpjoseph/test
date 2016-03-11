app.controller('myJson', function ($scope, $http) {
	$scope.name = 'my Json';

	$http.get("data.json").then(function(response){
		$scope.myList = response.data;
	}, function(response){
		$scope.myList = response.statustext;
	})

})
