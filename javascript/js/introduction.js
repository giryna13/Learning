function changeImage() {
	var image = document.getElementById('myImage');
	if (image.src.match("bulb_of")) {
		image.src = "images/bulb_on.jpg";
	} else {
		image.src = "images/bulb_of.jpg";
	}
}

function changeStyle() {
	var x = document.getElementById("style");
	x.style.fontSize = "25px";
	x.style.color  = "red";
}

function myFunction() {
	var x, text;
	
	// Get the value of the input field with id="numb"
	x = document.getElementById('numb').value;

	// If x is Not a Number or less than one or greater than 10
	if (isNaN(x) || x < 1 || x > 10) {
		text = "Input not valid";
	} else {
		text = "Input OK";
	}
	document.getElementById('demone').innerHTML = text;

}