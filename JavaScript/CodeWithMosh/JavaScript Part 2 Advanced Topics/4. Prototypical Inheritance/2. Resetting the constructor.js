{
    function Circle(radius) {
        this.radius = radius;
    }

    const c = new Circle(1);

    /*
       Write c in console
       Expand it to circleBase

       There is a constructor: f Circle(radius)
       This is the Circle function we defined above

       Let me show you

       Write:
       new Circle.prototype.constructor(1)
       new Circle(1)

       They generate the same result

       new Circle.prototype.constructor(1) === new Circle(1); // false
       new Circle.prototype.constructor(1) == new Circle(1); // false


       When you do Inheritance (Circle : Shape), you no longer have the constructor property for Circle
       You will have it for Shape

       Like this:
       Circle.prototype = Object.create(Shape.prototype);

       This happens because we are reset the prototype object of Circle

       As a best practice:
       After resetting the prototype object, we should reset the constructor property

       Circle.prototype = Object.create(Shape.prototype);
       Circle.prototype.constructor = Circle;
     */
}
