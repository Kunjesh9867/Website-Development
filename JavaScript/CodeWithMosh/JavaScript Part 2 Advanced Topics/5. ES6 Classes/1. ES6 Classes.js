// function Circle(radius){
//     this.radius = radius;

//     this.draw = function(){
//         console.log('draw');
//     }
// }

class Circle {
    constructor(radius) {
        this.radius = radius; // This is how we define an instance member
        // But if we want to define a instance method
        // We DON'T DO
        // this.draw = function(){}
        // Instead we define it in the body of the class
    }
    draw() {
        console.log("draw");
    }
}

const c = new Circle(1);
console.log(c);
/* 
    Circle {radius: 1}
        radius: 1
        __proto__:
            constructor: class Circle
            draw: ƒ draw()  
            __proto__: Object
*/
// So, in the above the 'draw' method is defined in the prototype of the Circle class
// Not in the Circle object itself

// If we want to define it inside the Circle object itself
// We have to write it inside constructor(radius)
/*
    constructor(radius){
        this.radius = radius;
        this.draw = function(){
            console.log('draw');
        }
    }
*/

console.log(typeof Circle); // function

// Sir went to 'Babeljs.io' and show us how the above code is converted to ES5
