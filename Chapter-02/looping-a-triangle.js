/*
Looping a Triangle

Write a loop that makes seven calls to console.log to output the following
tringle:

#
##
###
####
#####
######
#######
*/

let row = '';
let triangle = '';
for (let i = 0; i < 7; i++) {
  row += '#';
  triangle += row + '\n';
}
console.log(triangle);
