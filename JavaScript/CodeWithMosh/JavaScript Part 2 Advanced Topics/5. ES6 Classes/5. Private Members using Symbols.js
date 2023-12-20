{
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
    }
    const c = new Circle(1);
    console.log(c.radius); // We can access radius property => public hai!

    // 1
    // Some developer uses _ (underscore) to indicate private members (_radius)
    // But it is not a standard
    // It is just a convention
    // It is still public
}

{
    // 2
    // We can use a symbol to implement private members
    // Symbol is a primitive type (We have discussed about it previously)

    const _radius = Symbol(); // Internally, it is a unique symbol string

    class Circle {
        constructor(radius) {
            this[_radius] = radius;
        }
    }
    const c = new Circle(1);

    // There is a hack to access the private members with Symbols property

    const key = Object.getOwnPropertySymbols(c)[0]; // [Symbol()]
    console.log(c[key]); // 1   
}


// Private Methods
{
    const _radius = Symbol();
    const _draw = Symbol();

    class Circle {
        constructor(radius) {
            this[_radius] = radius;
        }

        [_draw]() {} 
        // We put [] because we want to use a variable as a function name
        // We can't use _draw() {} because it is a syntax error
        
    }
    const c = new Circle(1);

    // There is a hack to access the private members with Symbols property

    const key = Object.getOwnPropertySymbols(c)[0]; // [Symbol()]
    console.log(c[key]); // 1   
}