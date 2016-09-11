function validateNumber (value) {
 	if (!isNumber (value))
 		alert("Пожалуйста, введите число.");
}

function validateZIPCode (value) {
	if (!isZIPCode (value))
 		alert("Пожалуйста, введите индекс в формате ХХХХХ.");
}

function calcPrice() {
	var maxPrice = document.getElementById('income').value * 4;
	alert("Вы можете позволить дом стоимостью до $" + maxPrice + ".");
}

function findHouses (form) {
	var bedrooms = document.getElementById("bedrooms").value;
	var zipCode = document.getElementById("zip").value;

	form.submit ();
}