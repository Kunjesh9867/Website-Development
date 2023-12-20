function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);

// In the Previous example, we have seen
Object.getPrototypeOf(myObj);
// myObj.__proto__; (Parent of myObj)

// Object.getPrototypeOf(myObj); === Circle.prototype;

// Same is true for Below
let array = [];

array.__proto__;;
Array.prototype;

// Output of:
// Object.getPrototypeOf(myObj) === myObj.__proto__;
