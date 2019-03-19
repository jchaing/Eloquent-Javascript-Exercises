/*
Write a function countBs that takes a string as its only argument and returns a
number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it
takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to make
use of this new function.
*/

function countBs(str) {
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === 'B') {
      count++;
    }
  }
  return count;
}
console.log(countBs('BB')); // 2
console.log(countBs('BBCDFGB')); // 3
console.log(countBs('CCCBBADSBBFB')); // 5

function countChar(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
console.log(countChar('kakkerlak', 'k')); // 4
console.log(countChar('baabaa', 'a')); // 4
console.log(countChar('superduperuber', 'u')); // 3
