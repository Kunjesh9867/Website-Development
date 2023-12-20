// In JS, functions are objects.
// Function Declaration
function walk() {
  console.log("walk");
}

// Function Expression
// 1. Anonymous Function
// 2. Named Function

// Anonymous Function
let run = function () {
  console.log("run");
};
run();
let move = run;
move();
let move2 = run();

// Named Function
let run2 = function walk() {
  console.log("run");
};

// Concept
walk(); // walk 
