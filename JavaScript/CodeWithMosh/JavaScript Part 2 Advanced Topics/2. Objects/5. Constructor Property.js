{
  // Factory Function
  function createCircle(radius) {
    const circle = {
      radius, // radius: radius is replaced by (ES6) = radius
      draw: function () {
        console.log("draw" + radius);
      },
    };
    return circle;
  }

  const circle = createCircle(1);
  // In console write: circle.constructor
    /*
         Output: ƒ Object() { [native code] }
    */

  // Constructor function:
  function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw" + radius);
    };
  }
  const another = new Circle(1);
  // In console write: another.constructor
  /*
     Output: ƒ Circle(radius) {
       this.radius = radius;
       this.draw = function () {
         console.log("draw" + radius);
       };
   */
}

{
    // In JS, if we write 
    // let x = {};
    // let x = new Object(); is created behind the scenes by JS

    // let x = ''
    // let x = new String(); is created behind the scenes by JS

    // let x = true
    // let x = new Boolean(); is created behind the scenes by JS

    // let x = 1, 2, 3
    // let x = new Number(); is created behind the scenes by JS

    // Every Object has a constructor property and that references the function that was used to create that object
}
