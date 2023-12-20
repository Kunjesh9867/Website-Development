//? Dynamic Nature of Objects


// One thing that you should know about JS is that it is a dynamic language.
// We can always add new properties to an object.


const rectangle = {
  length: 10,
};

rectangle.breadth = 20;
rectangle.draw = function () {};

delete rectangle.breadth;
delete rectangle.draw;

console.log(rectangle);
rectangle = {}

// Many developer are confused that it is a 'const' but still we can add new properties to it.
// The 'const' means that we cannot reassign the constant but we can always change the properties of the constant by adding or removing.
// circle = {}; // This will give an error.

// rectangle = {};  //TypeError: Assignment to constant variable.
