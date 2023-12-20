class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method = Tied to a particular object, here Circle
    draw() {
        console.log("draw");
    }

    // Static Method
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = new Circle(1);
console.log(circle); 
/*
    Circle { radius: 1 }
    radius: 1
    __proto__:
        constructor: class Circle
        draw: ƒ draw()
        __proto__: Object
*/

// 'parse' is not in the Circle Object (CircleBase)
// It is in the Circle Class (CircleBase)
Circle.parse(); // Available 