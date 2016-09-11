// append item at the end of the list
$(document).ready(function(){
	$("#btn1").click(function(){
		$("ol").append("<li>Append item</li>");
	});
});

// prepend item at the begining of the list
$(document).ready(function(){
	$("#btn2").click(function(){
		$("ol").prepend("<li>Prepend item</li>");
	});
});

//inserts content Before and After the selected HTML elements.

$(document).ready(function(){
	$("#btn3").click(function(){
		$("ol").before("<br><b>Before</b>");
	});

	$("#btn4").click(function(){
		$("ol").after("<br><i>After</i><br>");
	});
});

