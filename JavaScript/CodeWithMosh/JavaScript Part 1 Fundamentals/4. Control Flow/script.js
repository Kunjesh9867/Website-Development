//? If-else statement
{
  // Hour
  // If hour is between 6am and 12pm: Good morning!
  // If it is between 12pm and 6pm: Good afternoon!
  // Otherwise: Good evening!
  let hour = 20;
  if (hour > 6 && hour < 12) {
    console.log("Good morning!");
  } else if (hour > 12 && hour < 18) {
    console.log("Good afternoon!");
  } else {
    console.log("Good evening!");
  }
}

//? Switch-case statement
{
  let role = "guest";
  switch (role) {
    case "guest":
      console.log("Guest User");
      break;
    case "moderator":
      console.log("Moderator User");
      break;
    default:
      console.log("Unknown User");
  }
}

//? For loop
// There are different types of loops in JavaScript.
// 1. For
// 2. While
// 3. Do-While
// 4. For-In
// 5. For-Of
{
  // for (initialExpression; condition; incrementExpression)
  for (let i = 0; i < 5; i++) {
    console.log("Hello World    ", i);
  }
}

//? While loop
{
  let i = 0;
  while (i < 5) {
    console.log("Hello World    ", i);
    i++;
  }
}

//? Do-While loop
// This loop will always execute at least once
{
  let i = 0;
  do {
    console.log("Hello World    ", i);
    i++;
  } while (i < 5);
}

//?  Infinite loop
{
  //   let i = 0;
  //   while (i < 5) {
  //     console.log("Hello World    ", i);
  //   }
}

//? For-In loop
// Used in Array and Object
{
  // Array
  let array = ["kunjesh", "ramani", 20];
  for (let index in array) {
    console.log(array[index]);
  }

  // Object
  const person = {
    name: "Kunjesh",
    age: 20,
  };
  for (const key in person) {
    console.log(person[key]);
  }
}

//? For-Of loop (ES6)
{
  let array = ["kunjesh", "ramani", 20];
  for (let value of array) {
    console.log(value);
  }
}

// In General, we use
// for-of loop => array
// for-in loop => object

//? Break and Continue
{
  let i = 0;
  while (i < 10) {
    if (i === 5) break;
    console.log(i);
    i++;
  }
}


// ForEach loop
//! Will Learn later
const fruits = ["apple", "orange", "cherry"];
fruits.forEach((fruit) => {
    console.log(fruit);
});
