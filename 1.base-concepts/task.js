"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let result1;
  let result2;
  let d = b ** 2 - 4 * a * c;
 
  if (d > 0) {
    result1 = (-b + Math.sqrt(d)) / (2 * a);
    result2 = (-b - Math.sqrt(d)) / (2 * a);
   arr.push(result1, result2);
  } else if (d === 0) {
    result1 = -b / (2 * a);
   arr.push(result1);
  }
  return arr;
 }
 
 console.log(solveEquation(1, 2, 1));
 
 
 function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let payment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  let sum = payment * countMonths;
  let newSum = sum.toFixed(2);
  return Number(newSum);
 }
 
 console.log(calculateTotalMortgage(10, 0, 50000, 12));