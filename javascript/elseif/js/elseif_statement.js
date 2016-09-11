function myFunction() {
	var greeting;
	var time = new Date().getHours();
	if (time < 6) {
		greeting = "Good Morning";
	} else if (time < 20) {
		greeting = "Good Day";
	} else {
		greeting = "Good Evening";
	}
	document.getElementById("demo").innerHTML = greeting;
}