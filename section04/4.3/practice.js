let newData = [1, 2, 3, 4, 5, 6, 7, 8];
function figureitOut (example) {
  newData.push(example.newData)
}
newData.forEach((example2) => figureitOut(example2));
console.log(newData);

newData.forEach((curr, index) =>
  console.log(`this is the current value ${curr} and this is the current iteration ${index} and this is the current value with 1 added to it: ${curr + 1}`)
  );

  //Key thing to remember. for each does no implicity return anything, it simply iterates through the array it's told to, everything AFTER the arrow. It exutes the code and it's done.

  // The map method does return something. A new array.

 const myArray = data.map((potato, tomato) => {
  return `this is the current value ${potato} and this is the current iteration ${tomato} and this is the current value with 1 added to it: ${potato + 
    1}`;
 });
console.log(myArray);

  //The filter methose returns the data within the array, not a new array.

  data.filter()
