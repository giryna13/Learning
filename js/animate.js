$(document).ready(function(){

  // $("div.box")
	 //  .animate({
	 //  	width: "100px",
	 //  	height: "100px"
	 //  }, 2000)
	 //  .animate({
	 //  	width: "400px"
	 //  }, 2000, function(){
	 //  	alert("Ira");
	 //  });

	 $("button:eq(1)")
	     .click(function(){
	     	console.log("1");
	     	$("div.box")
	     	.animate({
	     		left: "+=50px"
	     	}, 1000);
	     }); 

}); 