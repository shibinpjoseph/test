app.controller('addOrderController', function($scope){
	$scope.message = "test add message";
});

app.controller('showOrderController', function($scope, $routeParams){
	$scope.message = "test show message";
	$scope.order_id = $routeParams.orderId;
})

app.controller('testController', function($scope){
	$scope.message = "test template message";
})

