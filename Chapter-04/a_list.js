/*
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

// converts an array to an object list
function arrayToList(array) {
  let list = null;
  for (let i = 0; i < array.length; i++) {
    list = { value: array[array.length - 1 - i], rest: list };
  }
  return list;
}

console.log(arrayToList([10, 20])); // {value: 10, rest: {value: 20, rest: null}}

// converts an object list to an array
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30]))); // [10, 20, 30]

// returns the element at given position in list
function nth(list, index) {
  let array = listToArray(list);
  return array[index];
}

console.log(nth(arrayToList([10, 20, 30]), 1)); // 20

// helper function that adds an element to the front of list and creates a new list
function prepend(element, list) {
  newList = { value: element, rest: list };
  return newList;
}

console.log(prepend(10, prepend(20, null)));
