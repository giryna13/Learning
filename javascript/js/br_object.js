//--Access a Br Object--
function accessBr() {
	var x = document.getElementById ("myBR");
	x.style.display = "none";
}

//-- Create a Br Object--
function createBr() {
	// Get the div element with id="myDIV"
	var div = document.getElementById("myDIV");

	// Get all span elements inside of div
	var spans = div.getElementsByTagName("SPAN"); 
	
	// Create a loop which will insert a br element before each span element in div, starting from the second span element
	var i;
	for (i = 1; i < spans.length; i++) {
		var newElem = document.createElement("BR");
		div.insertBefore(newElem, spans[i]);

	}
}