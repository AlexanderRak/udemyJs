"use strict";
/* jshint esversion: 6 */

function calc(a, b) {
   return a + b;
}
console.log(calc(5,5));

let calcc = (a, b) => a+b;
console.log(calcc(5,5));

let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.4px";
// console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));