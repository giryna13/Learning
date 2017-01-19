var firstDie = Math.ceil(6 * Math.random());//не дуже добре дублювати операції
var secondDie = Math.ceil(6 * Math.random());//не дуже добре дублювати операції

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);

//замість дублювання рядків краще написати через функцію, яку можна буде потім використати в іншій програмі:

var getDieRoll = function() {
  return Math.ceil(6 * Math.random());
};

var firstDie = getDieRoll();
var secondDie = getDieRoll();
console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);
