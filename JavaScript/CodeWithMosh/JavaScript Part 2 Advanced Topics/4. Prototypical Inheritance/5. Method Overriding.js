function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
};

function Circle(radius) {}

extend(Circle, Shape);

const c = new Circle();

// Sometimes, when you work with inheritanace
// You may face the situation where this implementation may not work, may not be ideal for other object

// For example
// For Circle Object
// Shape.prototype.duplicate must behave differently

// So we override it

// Its very simple

/*
    After extend(Circle, Shape);

    Circle.prototype.duplicate = function () {
    console.log("duplicate Circle");
    };


    What if we want to call the duplicate method of the parent object

    We can do that by using the call method

    Circle.prototype.duplicate = function () {
        Shape.prototype.duplicate.call(this);
        console.log("duplicate Circle");
    };



*/
