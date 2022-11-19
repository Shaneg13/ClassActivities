const arrOne = [1, 2, 3];
const arrTwo = ["a", "b", "c"];

const arrThree = arrOne.concat(arrTwo);
console.log(arrOne);
// [1, 2, 3]

console.log(arrThree);
// [1, 2, 3, "a", "b", "c"]

console.log(arrTwo.join(" & "));
// "a & b & c"

console.log(arrTwo);
// ["a", "b", "c"]

//Activity
//const arrOne = ["a", [0], "b"];
//const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable

// print the new, merged array

// join the merged array and print the result

  // Definition:
//   arr.includes(valueToFind[, fromIndex])

//   // Example:
//   const arr = [1, 2, 3, 4, 5, 6];
//   arr.includes(2); // output: true
//   arr.includes(7); // output: false

//   console.log([1, 2, 3].includes(2)); //  output: true
//   console.log([1, 2, 3].includes(4)); //  output: false
