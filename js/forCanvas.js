var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// // пряямоугольник
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0,0, 150,75);

// // линия
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.lineTo(100, 90);
// ctx.lineTo(100, 0);
// ctx.stroke();

// // cicle
// ctx.beginPath();
// ctx.arc(95,50,40, 0, 2*Math.PI);
// ctx.stroke();

// //text
// ctx.font = "30px Arial";
// ctx.fillStyle = "#FF00FF";
// ctx.fillText("Hello World",10,50);
// ctx.strokeStyle = "#00FFFF";
// ctx.strokeText("Hello World",10,70);

// // Create gradient
// var grd = ctx.createLinearGradient(0,0,200,0);
// grd.addColorStop(0,"red");
// grd.addColorStop(0.5,"blue");
// grd.addColorStop(1,"green");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10,10,150,80);

// // Create gradient
// var grd = ctx.createRadialGradient(75,50,5, 90,60,100);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");

// // Fill with gradient
// ctx.arc(50, 50, 50, 0, 2*Math.PI);
// ctx.fillStyle = grd;
// ctx.fill();

var img = document.getElementById("scream");
ctx.drawImage(img,10,10);