// Constructor function: Naming convention: Pascal Notation
{
  function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw" + radius);
    };
  }

  const circle = new Circle(1);

  /*
       new: 1. Creates an empty object {}
            2. Sets this to point to the object
            3. Returns the object from the function (At the end we don't need to write 'return this' or 'return circle')
  */
  circle.draw();
}
