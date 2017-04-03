// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// // spread them out as an invidual argument
// console.log(add(...toAdd)); // spread operator comes before array

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Top'];
// var final = [...groupB, 3, ...groupA]; // [ 'Top', 3, 'Jen', 'Cory' ]
//
// console.log(final); // [ 'Top', 3, 'Jen', 'Cory' ]

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person); // Hi Andrew, you are 25
greet(...personTwo);


var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name); // Hi Andrew
});
