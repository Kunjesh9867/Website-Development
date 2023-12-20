// Factory Function
function createCircle(radius) {
  const circleVariable = {
    radius: radius, // radius: radius
    draw: function () {
      // draw: function() {}
      console.log("draw");
    },
  };
  return circleVariable;
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);
circle.Constructor;

/**
 * Write  another.constructor & cicle.constructor in the browser console.
 */

// In JS, when we write
const x = {};
// JS engine translates it to
// const x = new Object();

new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...

// EXTRA
/*
//? Constructor Property
// Use the above example
{
  function createCircle(radius) {
    return {
      radius, // radius: radius
      draw() {
        // draw: function() {}
        console.log("draw");
      },
    };
  }

  function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw");
    };
  }

  console.log(createCircle.constructor); // This will give us the Function() constructor.
  console.log(Circle.constructor); // This will give us the Function() constructor.
}

*/
