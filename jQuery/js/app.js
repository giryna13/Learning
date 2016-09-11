$(document).ready(function(){


	// task1
	$("button:eq(0)").click(function(){
		$("ul").toggle(2000);
	});
 
 	// getters and setters
	$("#btn").on("click", function(){
		var s, s2, s3, s4, s5, s6;

		// getters
		s = $("p:eq(0)").text();
		s2 = $("p:eq(0)").html();
		s3 = $("ul:eq(0)").html();
		s4 = $("input:eq(0)").val();
		s5 = $("input:eq(0)").attr("type");
		s6 = $("script:eq(1)").attr("src");

		console.log(s);
		console.log(s2);
		console.log(s3);
		console.log(s4);
		console.log(s5);
		console.log(s6);

		// setters
		$("p:eq(0)").text("<strong>new text</strong>");
		$("li:eq(0)").html("<strong>HMTL</strong>");
		// $("input:eq(0)").val("100");
		$("input:eq(0)").attr("value","100");
		
		// updater
		$("p:eq(0)").text(function(i, oldText) {
			return oldText + " my new text";
		});

	});


});
