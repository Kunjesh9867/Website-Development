function Circle() {
    // Instance Member
    this.radius = radius;
}

Circle.prototype.draw = function () {
    // Prototype Member
    console.log("draw");
};

Circle.prototype.duplicate = function () {
    // Prototype Member
    console.log("duplicate");
};

// In future, we create a Square Object.
function Square() {}
Square.prototype.duplicate = function () {
    console.log("duplicate");
};
// We don't have to do this 😢

// WE can make a SHAPE Object and put the duplicate method in it.
// SO that Circle and Square can inherit from it.

function Shape() {}
Shape.prototype.duplicate = function () {
    console.log("duplicate");
};

const s = new Shape();
const c = new Circle(1);

/*
    Write s in browser console

*/

// At first, it is like that
Circle.prototype = Object.create(Object.prototype);

// Now, we make Circle inherit from Shape
Circle.prototype = Object.create(Shape.prototype);

// c => circleBase(Circle.prototype) =>  Object.prototype
// s => shapeBase(Shape.prototype) => Object.prototype

// Above, we let circleVase inherit from shapeBase
// So, c => circleBase(Circle.prototype) => shapeBase(Shape.prototype) => Object.prototype
