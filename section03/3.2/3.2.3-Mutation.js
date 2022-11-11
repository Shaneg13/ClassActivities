let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values

x = 0;
y = false;
z = null;

console.log(x);
console.log(y);
console.log(z);
// print x, y, and z

const a = "name";
const b = [];
const c = {};

// try to reassign a, b, and c to FALSY values

// a = "Shane";
// b = "City";
// c = "obj";

// using BRACKET NOTATION, assign a value to b

b[0] = "Shane";

// using DOT NOTATION, assign a PROPERTY to c

c.age= 31;

// using DOT NOTATION, assign a METHOD to c

c.method = function(message) {console.log(message);};

// using BRACKET NOTATION, call the method in c

//This will be apart of the solution to a problem we will be presented in the cohort
//[c.method("Hello")]; -> Don't use this one :)

const word = 'method'
c[word]('Hello');
c.method('hello');

//c['method'](); -> This works too

c.age = 35

const f = {name: "Shane"};
const j = {name: "Shane"}
;

if (f === j) {
    console.log("f equals j");
} else {
    console.log("Nope they are not the same");
}

//They are not the same because where are they saved it not the same.
//Just because the contents look the same, where they are stored is not,
//and it's looking for the "address" of the stored objects

// print a, b, and c

console.log(a);
console.log(b);
console.log(c);