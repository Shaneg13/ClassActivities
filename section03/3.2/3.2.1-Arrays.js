// create an Array using an Array literal
const things = ["lamp", 40, false, [5, true, "blue"], "all"];
things[0];

// access the 1st item in the Array
console.log(things[0]);

// access the last item in the Array

console.log(things[4]);

// print the length of the Array

console.log(things.length);

// use the length property to access the last item in the Array

console.log(things[things.length - 1]);
;
// with for...of, loop over the Array, modify the value and add to a different Array
let diffThing;
letdifArray = [];
for (let thing of things) {
    let newThing = thing +1;
    diffArray += " " + newThing;
    diffArray[thing] = newThing;
}

console.log("this is the different things: ". diffThing);
console.log("This if the different array: ", diffArray);

// with for...of, loop over the Array, modify the value and add to a different Array

// let nums = [10, 20, 30, 40];
// let sumNum = 0;
// let plusFived = [];
// let i = 0;
// for (let num of nums) {
//   // sum all the nums in nums array
//   sumNum = num + sumNum;
//   // take current iteration and add 5
//   let addFive = num + 5;

//   // place in plusFived array
//   plusFived[i] = addFive;
//   // Manually increase value of i by 1 so
//   i++;
// }

// console.log(sumNum); // 100 
// console.log(plusFived); // [15, 25, 35, 45]

// Create a list (array) of some of your favorite things. Then create a variable called `faves` that has a value of this string: `I like these things: `. Finally, using a for...of loop, iterate over that array and concatenate each to the end of your `faves` string

// let favoriteThings = ["Jeep", "Lamp", "Ice Cream", "Space"];
// let faves = `I like these things: `;

// for (let favoriteThing of favoriteThings) {
//   faves += `${favoriteThing}! `;
// }
// console.log(faves);        // "I like these things: Jeep! Lamp! Ice Cream! Space!"