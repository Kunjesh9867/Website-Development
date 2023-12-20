//? Operators

// Operators are used to perform an operation on variables and values
// Types of Operators
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators

//? Arithmetic Operators
{
  let x = 10;
  let y = 3;
  console.log(x + y); // 13
  console.log(x - y); // 7
  console.log(x * y); // 30
  console.log(x / y); // 3.3333333333333335
  console.log(x % y); // 1
  console.log(x ** y); // 1000

  // Increment (++)
  console.log(++x); // 11
  console.log(x++); // 11
  console.log(x); // 12

  // Decrement (--)
  console.log(--x); // 11
  console.log(x--); // 11
  console.log(x); // 10
}

//? Assignment Operators
{
  let x = 10;

  x = x + 5;
  x += 5;

  x = x * 3;
  x *= 3;
}

//? Comparison Operators
{
  let x = 1;

  // Relational
  console.log(x > 0); // true
  console.log(x >= 1); // true
  console.log(x < 1); // false
  console.log(x <= 1); // true

  // Equality
  console.log(x === 1); // true
  console.log(x !== 1); // false

  // Strict Equality (Type + Value)
  console.log(1 === 1); // true
  console.log("1" === 1); // false

  // Lose Equality (Value)
  console.log(1 == 1); // true
  console.log("1" == 1); // true
  console.log(true == 1); // true
}

//? Ternary Operators
{
  // If a customer has more than 100 points,
  // they are a 'gold' customer, otherwise,
  // they are a 'silver' customer.

  let points = 110;
  let type = points > 100 ? "gold" : "silver";
  console.log(type); // gold
}

//? Logical Operators
{
  // Logical AND (&&)
  console.log(true && true); // true
  console.log(true && false); // false

  // Logical OR (||)
  console.log(true || true); // true
  console.log(true || false); // true

  // NOT (!)
  console.log(!true); // false
  console.log(!false); // true
}

//? Logical Operators with Non-Booleans
{
  // The result of the logical operators is not always a boolean
  // It depends on the value of the operands

  // Falsy (false)
  // undefined
  // null
  // 0
  // false
  // ''
  // NaN

  // Anything that is not Falsy -> Truthy

  console.log(false || 1 || 2); // 1 => short-circuiting
}

//? Bitwise Operators
{
  // Decimal to Binary
  // 1 = 00000001
  // 2 = 00000010

  // Bitwise OR
  //R = 00000011
  console.log(1 | 2); // 3

  // Bitwise AND
  //R = 00000000
  console.log(1 & 2); // 0
}

//? Operator Precedence
{
  let x = 2 + 3 * 4; // 14
}
