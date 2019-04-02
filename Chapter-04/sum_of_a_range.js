/*
console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
*/

function range(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let element of array) {
    total += element;
  }
  return total;
}
console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10))); // 55
