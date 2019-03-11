/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

let row = '';
let chessboard = '';
let grid = 8;

for (let i = 1; i <= grid; i++) {
  for (let j = 1; j <= grid; j++) {
    //print space for even row and column
    if (i % 2 === 0 && j % 2 === 0) {
      row += ' ';
      //print space for odd row and column
    } else if (i % 2 !== 0 && j % 2 !== 0) {
      row += ' ';
      //print # for everything else
    } else {
      row += '#';
    }
  }
  chessboard += row + '\n';
  row = '';
}
console.log(chessboard);
