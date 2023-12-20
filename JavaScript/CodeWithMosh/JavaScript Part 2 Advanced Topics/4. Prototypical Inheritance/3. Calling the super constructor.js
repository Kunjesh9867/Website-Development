function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
};

function Circle(radius, color) {
    // Shape(color); // This will not work. It will set the color property on the global object => window.
    this.radius = radius;
    Shape.call(this, color); // We use the call method to set the color property of the Circle object.
}

Circle.prototype = Object.create(Object.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log("draw");
};
