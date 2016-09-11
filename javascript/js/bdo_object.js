//--Access a Bdo Object--
function bdoRtl() {
	var x = document.getElementById("bdo");
	if (x.dir ==="rtl") {
		document.getElementById("demo").innerHTML = "Text direction is right to left";
	} else {
		document.getElementById("demo").innerHTML = "Text direction is left to right";

	}
}

function bdoLtl() {
	var x = document.getElementById("rtl");
	if (x.dir ==="rtl") {
		document.getElementById("demo1").innerHTML = "Text direction is right to left";
	} else {
		document.getElementById("demo1").innerHTML = "Text direction is left to right";

	}
}