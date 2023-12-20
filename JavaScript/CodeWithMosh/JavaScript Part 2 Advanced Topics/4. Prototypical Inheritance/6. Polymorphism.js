function Shape() {}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
};

function Circle(radius) {}
extend(Circle, Shape);
Circle.prototype.duplicate = function () {
    console.log("duplicate Circle");
};

function Square(size) {}
extend(Square, Shape);
Square.prototype.duplicate = function () {
    console.log("duplicate Square");
};

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
    shape.duplicate();
    // duplicate Circle
    // duplicate Square
}

// In the above, we call different duplicate method for different object
// This is called Polymorphism
// Poly => Many
// Morph => Form
