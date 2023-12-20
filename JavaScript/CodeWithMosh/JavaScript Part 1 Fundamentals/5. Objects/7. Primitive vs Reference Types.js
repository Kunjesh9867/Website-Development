//? Value Types = Primitive Types
// (Number, String, Boolean, Symbol, undefined, null)

//? Reference Types
// Object, Function, Array
// Functions = Objects
// Arrays = Objects

let x = 10;
let y = x;
x = 20;
console.log(x); // 20
console.log(y); // 10
// In the above example, x and y are independent of each other.

let x2 = { value: 10 };
let y2 = x2;
x2.value = 20;
console.log(x2); // {value: 20}
console.log(y2); // {value: 20}

// In the above exmaple, the reference of x2 is copied to y2, not the value.

// Primitive Types are copied by their value.
// Objects are copied by their reference.

{
  let number = 10;
  function increase(number) {
    number++;
  }
  increase(number);
  console.log(number); // 10
}

{
  let number = { value: 10 };
  function increase(number) {
    number.value++;
  }
  increase(number);
  console.log(number); // {value: 11}
}
