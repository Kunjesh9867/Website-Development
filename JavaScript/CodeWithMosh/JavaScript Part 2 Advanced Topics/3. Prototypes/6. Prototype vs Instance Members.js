{
  function Circle(radius) {
    this.radius = radius;

    this.draw = function () {
      console.log("move");
    };
  }

  const c1 = new Circle(1);
  const c2 = new Circle(1);

  // Previous knowledge Litt-up
  Circle.prototype === c1.__proto__;
}

{
  function Circle(radius) {
    // Instance Members
    this.radius = radius;

    // this.draw = function () {
    //   console.log("move");
    // };
  }

  const c1 = new Circle(1);
  const c2 = new Circle(1);

  // Here, Whenever we create an instance of Circle
  // Draw function is copied to the instance
  // This is not good, because if we have 1000 instances of Circle
  // We will have 1000 copies of draw function

  // In this scenario, we can use Prototype

  // Prototype Members
  Circle.prototype.draw = function () {
    console.log("draw");
  };

  // So, now we have added draw function to the prototype
  // So, now we have only one copy of draw function

  console.log(c1);

  // Next Level
  // We know that every object in JS has a toString() method
  Circle.prototype.toString = function () {
    return "Circle with radius " + this.radius;
  };

  // Run in browser
  console.log(c1.toString()); // Circle with radius 1

  // Remember, that both this memebers can access another members(properties and methods)
  // Parent(methods and properties) can access Child(methods and properties)
  // Child(methods and properties) can access Parent(methods and properties)


  // Order of "Changing the Prototype" does not matter
  // It will change eventually
  
}
