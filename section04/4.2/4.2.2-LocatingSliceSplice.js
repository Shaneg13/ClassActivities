//Activity 4.2.2
const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"

let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("b");

// find the last index of "a", "b", and "c"

let lastA = arr.indexOf("a");
let lastB = arr.indexOf("b");
let lastC = arr.indexOf("c");

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

function removeDuplicates (array, duplicatedValue) {
    let firstIndex = array.indexOf(duplicatedValue);
    let lastIndex = array.indexOf(duplicatedValue);
    while (firstIndex !== lastIndex); {
    array.splice(lastIndex, 1);
    lastIndex = array.lastindexOf(duplicatedValue)
} 
    return array;
}
console.log(arr);


// const arr = ["Jan", "Feb", "Apr", "Mar", "May", "Sept", "Oct", "Nov", "Dec"];

// console.log(arr.slice(6, arr.length));
// // ["Oct", "Nov", "Dec"]

// console.log(arr.slice(-3));
// // ["Oct", "Nov", "Dec"]

// console.log(arr.slice(6));
// // ["Oct", "Nov", "Dec"]

// console.log(arr.slice(0, 1));
// // ["Jan"]

// const april = arr.splice(2, 1);
// console.log(april); // 2 is the start index of what to remove, 1 is how MANY
// // ["Apr"]

// console.log(arr);
// // ["Jan", "Feb", "Mar", "May", "Sept", "Oct", "Nov", "Dec"]

// arr.splice(3, 0, april[0]); //  What is happening with April here?  
// arr.splice(5, 0, "Jun", "Jul", "Aug"); //Inserting AFTER Mar. It is an INDEX 0
// console.log(arr);
// // ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]