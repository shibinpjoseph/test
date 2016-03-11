app.directive("testDirective", function() {
	return {
		template : "test directive atrubute and tag."
	};
});
app.directive("testDirectiveClass", function() {
	return {
		restrict: "C",
		template : "test directive class"
	};
});
app.directive("testDirectiveCammand", function() {
	return {
		restrict : "M",
		replace : true,
		template : "test directive Cammand"
	};
});
app.directive("testDirectiveCommanted", function() {
    return {
        restrict : "M",
        replace : true,
        template : "<h1>Made by a directives!</h1>"
    };
});


// E for Element name
// A for Attribute
// C for Class
// M for Comment
// default EA
