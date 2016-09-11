$(document).ready(function{
	$('input').focus(function(){
		$(this).css("background-color", "#cccccc")
	});
	$('input').blur(function(){
		$(this).css("background-color", "#ffffff");
	});
});

$(document).ready(function(){
	$('#btn1').click(function(){
		alert("Вы можете позволить дом стоимостью до " + $("#income") * 4);
	});
}); 