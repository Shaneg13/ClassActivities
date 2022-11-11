// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4);
//True
console.log("Hello, world" === "Hello, world");
//True

let x = false;
let y = x;
console.log(x === y);
//True
console.log(y);
//False because it coped x into y which is false

x = !x;
console.log(x === y);
//False because X no longer equals itself and y = x, it ruined the "relationship"

console.log([1, 2, "c"] === [1, 2, "c"]);
//False because they are stored in different places or a different memory slot

console.log({} === {});
//False

y = { id: 1 };
x = y;
console.log(x === y);
//True

y.id += 1;
console.log(x.id === y.id);
console.log(x.id);
//True
// += take 1 and adds it back to the variable
// // create a variable referencing a primitive value
// let y = 3;

// // "pass" the value to x
// // x and y === 3, but each is referencing a different copy of the value
// let x = y;

// // function to mutate
// const addOne = (num) => num + 1;

// // mutate y
// addOne(y);
// // now, y === 4

// // x is still === 3
// console.log(x);