Array.prototype.shuffle() = function () {
    // ...
};
// You will be tempted to do this, but don't do it

// Because, if you do this, you are modifying the build-in object
// And this is a bad practice
// Because, if you are working in a team, and if someone else is working on the same project
// And if they are using the same build-in object with different functionality
// Then, they will get unexpected results
