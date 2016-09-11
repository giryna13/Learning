var points = [40, 100, 1, 5, 25, 10];

// document.getElementById("demo").innerHTML = points;

// sort in ascending order
// function myFunction() {
// 	points.sort(function(a, b){return a-b});
// 	document.getElementById("demo").innerHTML = points;
// }

// sort in descending order
// function myFunction() {
// 	points.sort(function(a, b){return b-a});
// 	document.getElementById("demo").innerHTML = points;
// }

// Find the Highest Value
// points.sort(function(a, b){return b-a});
// document.getElementById("demo").innerHTML = points[0];

// Find the Lower Value
points.sort(function(a, b){return a-b});
document.getElementById("demo").innerHTML = points[0];





