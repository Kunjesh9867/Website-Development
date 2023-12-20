const Circle = function () {
    this.draw = function () {
        console.log(this);
    };
};

const c = new Circle();
c.draw();  // Method call
console.log(c);
/*
    Circle {}
        draw: ƒ ()
    __proto__:
*/

// Referencing to the draw function
const draw = c.draw;
console.log(draw);
/*
    f(){
        console.log(this);
    }
*/

// Function call = 'this' points to the global object
draw();
// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}


/*
    In JS, we have 'strict mode' which is a way to introduce better error-checking into your code.
    When you use 'strict mode', this will point to undefined in a function call, instead of window object.
*/

{
    class Circle {
        draw() {
            console.log(this);
        }
    }   
    const c = new Circle();
    const draw = c.draw; 
    draw(); // Function call
    // undefined
    // It will automatically be in 'strict mode'
    // nameOfVariable === nameOfMethod
}