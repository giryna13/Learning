// add class attributes to different elements
$(document).ready(function(){
	$("#btn1").click(function(){
		$("h1").addClass("blue");
		$("h2").addClass("red");
		$("p").addClass("important green");
		$("div").addClass("important");

	});
});

// remove a specific class attribute from different elements
$(document).ready(function(){
	$("#btn2").click(function(){
		$("h1").removeClass("blue");
		$("h2").removeClass("red");
		$("p").removeClass("important green");
		$("div").removeClass("important");

	});
});

// toggles between adding/removing classes from the selected elements
$(document).ready(function(){
	$("#btn3").click(function(){
		$("h1").toggleClass("blue");
		$("h2").toggleClass("red");
		$("p").toggleClass("important green");
		$("div").toggleClass("important");

	});
});