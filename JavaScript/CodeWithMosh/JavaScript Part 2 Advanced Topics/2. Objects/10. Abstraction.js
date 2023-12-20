{
  function Circle(radius) {
    this.radius = radius;

    this.draw = function () {
      console.log("draw");
    };
  }
  const circle = new Circle(10);
}

// Let's add some complexity to the above code:
{
  function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 };

    this.computeOptimumLocation = function () {
      console.log("some code here");
      // ...
    };

    this.draw = function () {
      this.computeOptimumLocation();
      console.log("draw");
    };
  }
  const circle = new Circle(10);
  circle.draw();
}

// We don't want use to know about 'defaultLocation' and 'computeOptimumLocation' properties.
// We want only the essential properties to be exposed. This is called Abstraction. For Example: DVD Player.

// In the next lecture, we will learn how to implement Abstraction(private) in JS.

