function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}



// Functions are objects
console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);

const circle1 = new Circle1(1);

// You can write the above code as:
const Circle1 = new Function("radius",`
    this.radius = radius;
    this.draw = function () {
    console.log("draw");
    };`
);  // Internally, JS engine will translate this to the above code.


const another = new Circle(1);




Circle.call({},1) // First Argument is 'this' and then arguments.
// In this case, {} is the first argument.
// If we dont pass {} then it will be window object.
// Circle.call({},1) = new Circle(1) 

//! Just a Concept
const another1 = Circle(1);
Circle.call(window,1); 


// Just like call method, we have apply method.
// In apply method, we pass arguments as an array.
Circle.apply({}, [1, 2, 3, 4, 5]);
// So if we have an array of arguments, we can use apply method.

