// How to iterate over properties in instance vs prototype?
{
  function Circle(radius) {
    this.radius = radius;
    this.move = function () {
      console.log("move");
    };
  }

  const c1 = new Circle(1);

  Circle.prototype.draw = function () {
    console.log("draw");
  };

  console.log(Object.keys(c1)); // ["radius", "move"]
  // Only instance members are returned
  // 'draw' is not returned because it is in the prototype

  for (let key in c1) {
    console.log(key); // radius, move, draw
  }
  // Both instance and prototype members are returned
}

// In JS documentation, instance members are called "own properties"

