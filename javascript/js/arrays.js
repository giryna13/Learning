var fruits = ["banana", "orange", "apple", 56];

//виводить довжину масиву
//document.getElementById("demo").innerHTML = fruits.length;

//виведе значення: банан
//document.getElementById("demo").innerHTML = fruits[0];

//добавить ківі в масив
// function myFunction() {
// 	fruits[fruits.length] = "Kiwi";
// 	document.getElementById("demo").innerHTML = fruits;
// }

// var person = {firstName:"John", lastName:"Doe", age:46};
// document.getElementById("demo").innerHTML = person["firstName"]
 
// function myFunction() {
// 	var index;
// 	var text = "<ul>";
// 	var fruits = ["banana", "orange", "apple", "mango"];
// 	for (index = 0; index < fruits.length; index++) {
// 		text += "<li>" + fruits[index] + "</li>";
// 	}
// 	text += "</ul>"
// 	document.getElementById("demo").innerHTML = text;
// 
// }

// var person = [];
// person[0] = "John";
// person[1] = "Doe";
// person[2] = "46";
// document.getElementById("demo").innerHTML = person[0] + " " + person.length;

document.getElementById("demo").innerHTML = isArray(fruits);

function isArray(myArray) {
	return myArray.constructor.toString().indexOf("Array") > -1;
}