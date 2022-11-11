// print the function below
function myNumberFunction() {
    let num = 2 ** 2;
    num = num + 3;
    num = num % 4;
    num = num * 14;
    console.log("I am the console.log inside of the function declaration, " + num);
    return num;
  }
  
  console.log("I am the console.log on line 11: " + myNumberFunction());


  // now, invoke the myNumberFunction function

  //myNumberFunction();
  
  // print just the function of console.log (no invocation)

  //console.log(console.log);