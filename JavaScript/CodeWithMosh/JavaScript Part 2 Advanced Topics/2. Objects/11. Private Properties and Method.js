{
  function Circle(radius) {
    let color = "red"; // It is a propety of Circle. NO Becuase there is no 'this'. It's just a local variable which will die when the function is done executing.

    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function () {
      console.log("some code here");
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

/*
    We have a concept of 'closure'.
    A closure determines which variables will be accessible to an inner function.
    thid.draw()  will access inner properties/methods and outer(parent) properties/methods.

    Like in the above exmaple this.draw is calling computeOptimumLocation(). 
    SO, after the function is done executing, computeOptimumLocation() will not be removed from the memory just like 'color'.
    Because they are the part of the closure of the draw() function.

    */
