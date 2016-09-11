// function myFunction() {
// 	document.getElementById("demo").innerHTML = Boolean(10 > 9);
// }

// Everything With a Real Value is True
// var b1 = Boolean(100);
// var b2 = Boolean(3.14);
// var b3 = Boolean(-15);
// var b4 = Boolean("Hello");
// var b5 = Boolean('false');
// var b6 = Boolean(1 + 7 + 3.14);

// document.getElementById("demo").innerHTML = 
// "100 is " + b1 + "<br>" +
// "3.14 is " + b2 + "<br>" +
// "-15 is " + b3 + "<br>" +
// "Any (not empty) string is " + b4 + "<br>" +
// "Even the string 'false' is " + b5 + "<br>" +
// "Any expression (except zero) is " + b6;

// Everything Without a Real Value is False
// function myFunction() {
// 	var x = 0;
// 	document.getElementById("demo").innerHTML = Boolean(x);
// }

// function myFunction() {
// 	var x = -0;
// 	document.getElementById("demo").innerHTML = Boolean(x);
// }

// function myFunction() {
// 	var x ="";
// 	document.getElementById("demo").innerHTML = Boolean(x);
// }

// function myFunction() {
// 	var x;
// 	document.getElementById("demo").innerHTML = Boolean(x);
// }

// function myFunction() {
// 	var x = null;
// 	document.getElementById("demo").innerHTML = Boolean(x);
// }

function myFunction() {
	var x = 10 / "H";
	document.getElementById("demo").innerHTML = Boolean(x);
}

