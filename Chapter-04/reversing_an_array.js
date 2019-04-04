/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

// for of and unshift method
function reverseArray1(array) {
  let newArray = [];
  for (let element of array) {
    newArray.unshift(element);
  }
  return newArray;
}
console.log(reverseArray1(['A', 'B', 'C'])); // ['C', 'B', 'A']

// for loop and push method
function reverseArray2(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(reverseArray2(['A', 'B', 'C'])); // ['C', 'B', 'A']
