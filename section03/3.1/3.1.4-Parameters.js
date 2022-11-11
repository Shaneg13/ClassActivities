// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

// function functionWithTwoParams(x, y){
//     console.log(x);
//     console.log(y);
//     return x + y;
// }


// invoke the function and pass in two numbers

//This is the function with 2 numbers -> console.log(functionWithTwoParams(5, 10));

// invoke the function and pass in more than two numbers

// This is the function with more than 2 numbers, since there are only 2 params,
// it will only pull 5, 10, and 5+10
// console.log(functionWithTwoParams(5, 10, 15, 20));

// invoke the function and pass in only one number
// this will return 1 number, 5, and return underfined since there is no second param
// like how out return value is setup
// console.log(functionWithTwoParams(5));

// change the function to set default values for the parameters

// function functionWithTwoParams(x =1, y =2){
//     console.log(x);
//     console.log(y);
//     return x + y;
// }

// again, invoke the function and pass in only one number

//This defaulted the numbers and will output 5,2 and 5+2. it overrides x=1
//console.log(functionWithTwoParams(5));

// Rest Operator
// add a rest operator to the function's parameters

// function functionWithTwoParams(x, y, ...z){
//     console.log(x);
//     console.log(y);
//     console.log(z);
//     return x + y;
// }
// // add a line to the function's body to print the value of the rest operator
// // Return output -> 5 , 10 , [ 15, 20, 25 ] , 15
// //Pull X, Y, the "rest or, Z, as an array" then returns X + Y or 5+10

// // again, invoke the function and pass in more than two numbers
// console.log(functionWithTwoParams( 5, 10, 15, 20, 25));