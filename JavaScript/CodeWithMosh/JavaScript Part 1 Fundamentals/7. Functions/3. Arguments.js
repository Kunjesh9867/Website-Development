let x = 1;
x = "a";

function sum(a, b) {
  return a + b;
}
console.log(sum(1,2));
console.log(sum(1)); // 1 + undefined = NaN
console.log(sum()); // undefined + undefined = NaN
console.log(sum(1,2,3,4,5)); // 3 


// Tasks: What if we want to sum more than 2 numbers?
// In Java, we can use varargs.
// In JS, we can use the arguments object.

function sum2(a,b){ // We are not using a,b so we can remove them, just sum2()
    let total = 0;
    for (let value of arguments) // arguments is an object, but it has a iterable so we can use for-of loop
        total += value;
    return total;
}

console.log(sum2(1,2,3,4,5));