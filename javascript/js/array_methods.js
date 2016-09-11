var fruits = ["banana", "orange", "apple"];

//Converting Arrays to Strings
// document.getElementById("demo").innerHTML = fruits.valueOf();

// document.getElementById("demo").innerHTML = fruits.toString();

// document.getElementById("demo").innerHTML = fruits.join(" * ");

document.getElementById("demo").innerHTML = fruits;

// Remove the latest element from fruits
// function myFunction() {
// 	fruits.pop()
// 	document.getElementById("demo").innerHTML = fruits;
// }

// Add a new element from fruits
// function myFunction() {
// 	fruits.push("Kiwi")
// 	document.getElementById("demo").innerHTML = fruits;
// }

// Remove the first element from fruits
// function myFunction() {
// 	fruits.shift()
// 	document.getElementById("demo").innerHTML = fruits;
// }

// Add the first element from fruits
// function myFunction() {
// 	fruits.unshift("Lemon")
// 	document.getElementById("demo").innerHTML = fruits;
// }

// Changes the first element of fruits to "Kiwi"
// function myFunction() {
// 	fruits[0] = "Kiwi"
// 	document.getElementById("demo").innerHTML = fruits;
// }

// Appends "Kiwi" to fruit
// function myFunction() {
// 	fruits[fruits.length] = "Kiwi"
// 	document.getElementById("demo").innerHTML = fruits;
// }

// Changes the first element in fruits to undefined
// function myFunction() {
// 	delete fruits[0];
// 	document.getElementById("demo").innerHTML = fruits[0];
// }

// Splicing an Array
// function myFunction() {
// 	fruits.splice(2, 0, "Lemon", "Kiwi");
// 	document.getElementById("demo").innerHTML = fruits;
// }

// Removes the first element of fruits 
// function myFunction() {
// 	fruits.splice(0, 1);
// 	document.getElementById("demo").innerHTML = fruits;
// }

// The sort() method sorts an array alphabetically: 
// function myFunction() {
// 	fruits.sort();
// 	document.getElementById("demo").innerHTML = fruits;
// }

// sorts an array in descending order: 
function myFunction() {
	fruits.sort();
	fruits.reverse();
	document.getElementById("demo").innerHTML = fruits;
}

