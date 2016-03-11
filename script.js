var request;

if(window.XMLHttpRequest){
	request = new XMLHttpRequest();
}
else{
	request = new ActiveObject("Microsoft.XMLHTTP");
}
request.open("GET", "data.txt");

request.onreadystatechange = function(){
	if((request.readyState === 4) && (request.status === 200)){
	console.log(request);
	//document.writeln(request.responseText);
	var modify = document.getElementById("update");
	modify.innerHTML = request.responseText;

	var list1 = document.getElementsByTagName("ul")[0].getElementsByTagName("li");
	var list2 = document.getElementsByTagName("ul")[1].getElementsByTagName("li");
	list2[2].innerHTML = request.responseText;

	for(var i = 0; i < list1.length; i++){
		list1[i].innerHTML = request.responseText;
	}

}
}
request.send();
