// Prototype is essentially a parent of another object
// Whenever you hear 'prottotype' think 'parent'

/* 
    x = {}
    y = {}
    Object.getPrototypeOf(x) === Object.getPrototypeOf(y) // true
    x.__proto__ === y.__proto__ // true
    x.__proto__ === Object.prototype // true

    x.toString() // [object Object]
*/