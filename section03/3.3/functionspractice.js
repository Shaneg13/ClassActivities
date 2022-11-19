// Declare and invoke, no return
//THIS WILL BE MY BIBLE
function helloworld() {
    console.log("Hello World");
}
helloworld();


//Declare and invoke, with return

let weather = "hot and sunny" //Open string
let greeting;

function weatherGreeting() {
    let outfit;

if (weather == "hot and sunny") {
        outfit = "Light and cool";
}
if (weather == "cold") {
        outfit = "toasty"; 
}
if (weather == "rainy") {
         outfit = "wet resistant";
}

greeting = `The weather today is ${weather}. Consider wearing ${outfit}.`;
return greeting;
}

// function shaneMakingfunctions() {
//     return "This is the first thing I'm doing, this is my functions return"
// }
// shaneMakingfunctions()

//When asking for an output, use return


//Parameters
function weatherWithParams(weather) {
    let outfit;

    if (weather == "hot and sunny") {
        outfit = "Light and cool";
}
if (weather == "cold") {
        outfit = "warm"; 
}
if (weather == "rainy") {
    outfit = "wet resistant";
}

greeting = `Today it is ${weather}. You should probably wear something ${outfit} outfit.`;
return greeting;
}
console.log(weatherWithParams("cold"));
console.log(greeting);
console.log(weatherWithParams("rainy"));
console.log(weatherWithParams("hot and sunny"));

//Covering a Rest Parameter

let nums;
function printParams(...params){
    for (let taco of params) {
        console.log(taco);
    }
    nums = params;
    return params;
}
printParams("First", "Second", "Third", "Owl");

//Using Returned Value as Parameter

function printOtherFunctionreturn(otherFunction) {
console.log("this is the param:", otherFunction);
}
printOtherFunctionreturn(28);

//Call Back Function Example

printOtherFunctionreturn(printParams(1, 2, 3));


//Arrow Syntax - Block Body

const sumNums = (...nums) => {
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }
    return sum;
};

console.log(sumNums(1 , 2, 3, 4, 5, 6 ,7 ,8));   //This is outside of the scope above

// Arrow Syntax - Concise

// const sumNums = (...nums) => let sum = 0; for (let num of nums) {sum += num};
// console.log(sumNums(2, 3));


//Example to call a function with params
function teamGreeting() {
    let greeting = "Hey Welcome Team!";
    return greeting;     //This will not show in the log because of return, on console.log prints. It still returns
}
console.log(teamGreeting());


//Class Example
 function pizzaParty(...goodTimes) {
     for (let time of goodTimes) {
         console.log(time);
     }
     return goodTimes;
}
pizzaParty("We did it!");


//My Example
function example(...attempt) {
  for (let attempt2 of attempt) {
    console.log(attempt2);
}   
return attempt;
}
example("We Tried", "Tried so hard" , "and got so far");

const names = ["Shane", "thomas", "Grewell"];
for (let shaneFullName of names) {          //This is a loop and returns all values in array
    console.log(shaneFullName)
}

//More examples
const arr = [
    "dog", 
    "cat", 
    "true", 
    "false", 
    ["this is an array inside of an array", 5, true],
    {object: "I am a value to a key named object"},
    "Just kidding, I am last"
];
console.log(arr);
console.log("This is the second iteration", arr[1]);
console.log("This is the fourht iteration", arr[3]);
console.log(arr[10]);
console.log(arr.length);
console.log(arr[0].length);
console.log(arr[4].length);
console.log(arr[4][0].length);  /// this tells us how many characters are in array 3 = 35

for (let item of arr) {
    console.log(item);
}
let lastItem = arr.length - 1;

console.log("This is the last item: ", arr[lastItem]);

const books = {

    title: "The Last Iteration",
    author: "Unknown",
    year: 2022,
    genre: ["Comedy", "drama", "romance"],
    award: {
        awardName: "Amazing book stuff",
        nominated: 2020,
        won: 2022,
        worthless: true
    },
    promote: function() {
        return `${this.title} is a book written by ${this.author} in ${this.year}. 
        It has won an award called ${this.award.awardName} in ${this.year} in ${this.award.won} 
        and it is ${this.award.worthless} that is worthless`;
    }
}

console.log(books.promote());