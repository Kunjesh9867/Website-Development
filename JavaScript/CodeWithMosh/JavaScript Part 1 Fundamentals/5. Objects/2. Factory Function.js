//? Factory Function
// Factory Function is not the only way to create objects in JS.
// We also have Constructor Function.

const circle1 = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

const circle2 = {
  radius: 2,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

// REAL EXAMPLE

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

// Instead of the above one, we can use the below one.

function createCircle(radius) {
  return {
    radius: radius, // radius: radius
    draw() {
      // draw: function() {}
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
console.log(circle.radius);
circle.draw();


//! CONCEPT
console.log(circle.draw()); // draw + undefined 