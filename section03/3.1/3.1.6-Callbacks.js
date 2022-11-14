// // "regular" functions
// function greet(name) {
//     return `Hello ${name}!`;
//   }
  
//   function welcome(name) {
//     return `${name}, welcome!`;
//   }
  
//   function informAboutSale(name) {
//     return `${name}, we're having a sale!`;
//   }
  
  // function that takes a callback function as an argument
  function getNameAndShowMessage(callback) {
    const name = prompt("Please Enter Your Name: ");
    alert(callback(name));
  }
  
  // pass each "regular" function into getAndShowMessage as a callback function
  getNameAndShowMessage(informAboutSale);

  // "regular" functions
function greet(name) {
  return `Hello ${name}!`;
}

function welcome(name) {
  return `${name}, welcome!`;
}

function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}

// function that takes a callback function as an argument
function getNameAndShowMessage(callback) {
  const name = prompt("Please Enter Your Name: ");
  alert(callback(name));
}

//Now pass each "regular" function into getNameAndShowMessage function as a callback function like so...

console.log(getNameAndShowMessage(greet));

console.log(getNameAndShowMessage(welcome));

console.log(getNameAndShowMessage(informAboutSale));