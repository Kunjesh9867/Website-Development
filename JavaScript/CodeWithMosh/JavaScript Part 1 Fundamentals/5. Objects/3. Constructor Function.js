function createCircle(radius) {
  return {
    radius: radius, // radius: radius
    draw() {
      // draw: function() {}
      console.log("draw");
    },
  };
}

//? Constructor Function
//! While creating a contructor function => use Pascal Notation.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);
// When we use 'new' keyword. 3 things happen:
// 1. New empty object {} is created.   const x = {}; // This happens under the hood.
// 2. 'this' keyword will point to that object.
// 3. 'return this' is added to the end of the function.

//? What is the difference between Factory Function and Constructor Function?
/*
    Factory Function:
        const myCircle = createCircle(1);
        Camel Notation is used.
    Constructor Function:
        We use 'new' keyword to create an object.
        const myCircle = new Circle(1);
        We use 'this' keyword to point to the object.
        Pascal Notation is used.
 */

// These both the functions are same
// People who have some experience prefer to use Constructor Function.
// Because it is more similar to other OOP languages.
// Take a Function that suits you and stick with it.
