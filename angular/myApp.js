var app = angular.module('myApp',['ngAnimate']);

app.run(function ($rootScope) {
	$rootScope.testScope = "check rootscope value";
});
app.filter('myFormat', function() {
    return function(x) {
        var count, name, text="";
        x = x.split("");

        for(count = 0; count < x.length; count++){
        	name = x[count];
        	if(count%2 == 0){
        		name = name.toUpperCase();
        	}
        	text += name;
        }

        return text;
    };
});
