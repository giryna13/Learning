//--Access a Blockquote Object--

function myFunction () {
	var x = document.getElementById("myBlockquote")[0];
	document.getElementById("demo").innerHTML = x;
}

//--Create a Blockquote Object--

function myFunctions() {
	var x = document.createElement("BLOCKQUOTE");
	var t = document.createTextNode("For 50 years, WWF  has been protecting the future of nature.");
	x.setAttribute("cite", "http://www.worldwildlife.org/who/index.html");
	x.appendChild(t);
	document.body.appendChild(x);
}
