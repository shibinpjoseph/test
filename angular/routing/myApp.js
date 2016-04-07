var app = angular.module('myApp',[]);


app.config(['$routeProvider', function($routeProvider){
		$routeProvider.
		when('/AddNewOrder', {
	        templateUrl: 'view/add_order.html',
	        controller: 'addOrderController'
	    }).
	    when('/ShowOrders/:orderId', {
	    	templateUrl : 'view/show_order.html',
	    	controller : 'showOrderController'
	    }).
	    when('/ShowOrders', {
	    	templateUrl : 'view/show_order.html',
	    	controller : 'showOrderController'
	    }).
	    when('/testTemplate', {
	    	templateUrl : 'test_order.html',
	    	controller : 'testController'
	    }).
		otherwise({
			redirectTo : '/index'
		});

	}
]);
