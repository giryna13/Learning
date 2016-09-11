//--Access a Bold Object--
function myFunction() {
	var x = document.getElementById ("b");
	x.style.color = "red";
}

//-- Create a Bold Object--
function createBobject() {
	var x = document.createElement("B");
	var t = document.createTextNode("Some bold text"); 
	x.appendChild(t);
	document.body.appendChild(x);
}