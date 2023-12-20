function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw" + radius);
  };
}

const circle = new Circle(10);

/* 
    In Real World, adding or removing properties is a very common operation in object.
    Becuase data is passed from user to server via object.
    In JS, we do not have classes so we do not have to define it ahead of time, we have objects. 
    So, we can add or remove properties anytime/anywhere.
    This make JS powerful and flexible. 
*/

// Adding a new property
circle.location = { x: 1 };  // dot notation
circle["location"] = { x: 1 }; // bracket notation  


console.log(circle); // Circle {radius: 10, draw: ƒ, location: {…}}

// Removing a property
delete circle.location;
