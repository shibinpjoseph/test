app.controller('myFilter', function($scope) {

	$scope.myArray = ["TEST 1", "test 2", "test 3"];

	$scope.names = [
		{name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
	];

	$scope.price = 50;

	// filter can only be used on arrays
	$scope.naneFilter = [
		'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
	];

	$scope.orderByMe = function(x) {
		$scope.myOrder = x;
	};


// currency   ---  Format a number to a currency format.
// date    ---  Format a date to a specified format.
// filter   ---   Select a subset of items from an array.
// json   ---   Format an object to a JSON string.
// limitTo   ---   Limits an array/string, into a specified number of elements/characters.
// lowercase   ---   Format a string to lower case.
// number   ---   Format a number to a string.
// orderBy   ---   Orders an array by an expression.
// uppercase   ---   Format a string to upper case.
})

app.service('customService', function () {
	this.uppercases = function (x) {
	 return x.toUpperCase();
	}
});

app.controller('myService', function ($scope, $location, $http, $timeout, $interval, customService) {
	var mytest = "service test";
	$scope.myURL = $location.absUrl();

	$http.get('data.json').then(
		function(responce){
			$scope.myData = responce.data;
		}
	);

	$timeout(function () {
		$scope.testTimeOut = "Timeout testing.";
	}, 1000);


	$scope.myTime = new Date().toLocaleTimeString();

	$interval(function () {
		$scope.myTime = new Date().toLocaleTimeString();
	});

	$scope.test = customService.uppercases(mytest);

	$scope.count = 0;

	$scope.myClick = function(x) {
		if(x === '+'){
			$scope.count ++;
		}
		if(x === '-'){
			$scope.count --;
		}
	};

	$scope.myToggle = false;

	$scope.toggle = function() {
		$scope.myToggle = !$scope.myToggle;
	};

	$scope.mouseOver = function(mouse) {
		$scope.x = mouse.clientX;
		$scope.y = mouse.clientY;
	};

});

app.controller('myForm', function($scope) {

	$scope.master = {firstName:"shibin", lastName:"joseph"}

	$scope.myForm = "Form";

	$scope.myClick = function() {
		// $scope.user = "";
		$scope.user = angular.copy($scope.master);
	};

	$scope.myClear = function(){
		$scope.user = "";
	}

	$scope.myClick();
})

