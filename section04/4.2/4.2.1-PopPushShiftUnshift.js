const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let removeNum1 = nums.pop();

let removeNum2 = nums.pop();

let shiftNum1 = nums.shift();

let shiftNum2 = nums.shift();

console.log(nums);
// remove each of the first two items with shift(), saving each item to a variable

// use push and unshift to add the variables back to the array in numerical order, 0-6
const arr = [1, 2, 3];
let pushReturn = arr.push(5);
console.log(pushReturn);
// 4
console.log(arr);
// [1, 2, 3, 5]

let unshiftReturn = arr.unshift(-1);
console.log(unshiftReturn);
// 5
console.log(arr);
// [-1, 1, 2, 3, 5]

//const arr = [6, 7, 8];
let popReturn = arr.pop();
console.log(popReturn);
// 8
console.log(arr);
// [6, 7]

let shiftReturn = arr.shift();
console.log(shiftReturn);
// 6
console.log(arr);
// [7]

//const arr = ["a", "b", "a", ["a", "b", "b", "c"], "c", "c"];
console.log(arr.indexOf("c"));
// 4
console.log(arr.lastIndexOf("a"));
// 2