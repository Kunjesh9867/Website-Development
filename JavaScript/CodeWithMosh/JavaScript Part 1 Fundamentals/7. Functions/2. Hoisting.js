// Function Declaration
// We can call a function before it is defined.
walk();
function walk() {
  console.log("walk");
}

// Function Expression
// We cannot call a function before it is defined.
// run(); // TypeError: run is not a function
let run = function () {
  console.log("run");
};

//? What is Hoisting?
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of the file.
// This is performed by JavaScript engine.
