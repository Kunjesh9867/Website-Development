{
  function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function () {
      // ...
    };

    this.draw = function () {
      computeOptimumLocation();
      console.log("draw");
    };
  }
  const circle = new Circle(10);
  circle.draw();
}

// Here the defaultLocation is private properties.
// But what if we want to display the defaultLocation?

// Solution 1: We can make a method and return defaultLocation into it.
{
  function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function () {
      return defaultLocation;
    };

    this.draw = function () {
      console.log("draw");
    };
  }
  const circle = new Circle(10);

  console.log(circle.getDefaultLocation());
  // But we don't want to call this method
  // We want to access it like a property
  // circle.defaultLocation
}

console.log("Solution 2:");

// Solution 2: We can use Object.defineProperty() OR Object.defineProperties() method
{
  function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function () {
      return defaultLocation;
    };

    this.draw = function () {
      console.log("draw");
    };

    Object.defineProperty(this, "defaultLocation", {
      get: function () {
        return defaultLocation;
      },
      set: function (value) {
        if (!value.x || !value.y) throw new Error("Invalid location.");
        defaultLocation = value;
      },
    });
  }
  const circle = new Circle(10);
  console.log(Circle.defaultLocation); // undefined in Node.js
  // You can get the output in browser console

  circle.defaultLocation = 1; // Error: Invalid location.
}
