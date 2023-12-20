// Function Declaration = Hoisted = Can be called before it is defined
function calcAge(year) {} // We don't add ; because it is a function
 
// Function Expression
var retirement = function(year) {}; // We add ; because it is a statement


// Class

// Declaration = Not Hoisted  = EveryOne uses this
class Circle {}

// Expression = Not Hoisted
const Square = class {};

