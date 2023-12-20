// Everytime we create another object like Square,Rectangle, etc
// We have to write this:
/*
    Circle.prototype = Object.create(Object.prototype);
    Circle.prototype.constructor = Circle;
*/

// We can make a function for this = Intermediate Function Inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
