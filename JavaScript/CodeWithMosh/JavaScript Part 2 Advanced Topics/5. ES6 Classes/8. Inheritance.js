// This is just like the inheritance in Java.
// Learn that first.


class Shape{

    constructor(color){ 
        this.color = color;
    }
    move(){
        console.log('move');
    }
}

class Circle extends Shape{
    draw(){
        console.log('draw');
    }
}

const c = new Circle(); 
c.move(); // move