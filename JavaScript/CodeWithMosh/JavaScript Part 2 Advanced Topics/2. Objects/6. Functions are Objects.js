function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw" + radius);
  };
}

const another = new Circle(1);

/* 
    In console:
        Circle.name  // Circle
        Circle.length  // 1
        Circle.constructor  // ƒ Function() { [native code] }  This function is used to create the object 
        Circle.call
*/