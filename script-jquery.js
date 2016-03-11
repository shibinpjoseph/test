$("#search").keyup(function(){

	var mysearchValue = $("#search").val();
	//console.log(myserchValue
	var myREG = new RegExp(mysearchValue, "i");

	$.getJSON('data.json', function(data){

	//console.log(data);


	var output = '<ul>';
	$.each(data, function(key, val){
	if((val.name.search(myREG) != -1) || (val.bio.search(myREG) != -1)){
		output += '<li>';
		output +=  '<h3>' + val.name + '</h3>';
		output +=  '<img src="images/'+ val.shortname + '_tn.jpg"/>';
		output += '<p>'+ val.bio +'</p>';
		output += '</li>';
		}
	})
	output += '</ul>';

	$("#update").html(output);
});
})
