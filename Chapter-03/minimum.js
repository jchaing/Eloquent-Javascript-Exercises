// Write a function min that takes two arguments and returns their minimum.

// if statement
function min(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(min(0, 10));
console.log(min(0, -10));

// ternary operator
function min(num1, num2) {
  return num1 < num2 ? num1 : num2;
}
console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(-1, -2));
