function start(){
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log(i); // 5 //! Issue - 1 
}

start(); 

/*
    When you declare a variable with var keyword, it is scoped to the nearest function
    But this is not how most programming languages work
    One of the weird things about JavaScript     
*/


// var => function-scoped
// ES6 (ES2015): let, const => block-scoped


//! Issue - 2
var color = "red";
let age = 30;
/*
    var => attached with window object
    let => not attached with window object
    TO SEE THIS: WRITE WINDOW.COLOR IN CONSOLE 
*/

function sayHi(){
    console.log("Hi");
}
// This function is added to the WINDOW OBJECT by default
// This is not a good practice
// We will see how to avoid this: by encapsulating the code in a module