var request;

if(window.XMLHttpRequest){
	request = new XMLHttpRequest();
}
else{
	request = new ActiveObject("Microsoft.XMLHTTP");
}
request.open("GET", "data.xml");

request.onreadystatechange = function(){
	if((request.readyState === 4) && (request.status === 200)){

	var modify = document.getElementById("update");
	var names = request.responseXML.getElementsByTagName("name");
	var output = '<ul>';
	for(var i = 0; i < names.length; i++){
		console.log(names[i].firstChild.nodeValue);
		output += '<li>' + names[i].firstChild.nodeValue + '</li>';
	}
	output += '</ul>';
	modify.innerHTML = output;
	}
}
request.send();
