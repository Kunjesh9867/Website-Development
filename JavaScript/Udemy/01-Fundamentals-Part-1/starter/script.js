/*let js = "amazing";
    if (js == "amazing") {
      alert("JavaScript is FUN!"); 
    }

    let x = 40+8+3+6;
    console.log(x);
*/

// Values and Variables

/*let js = "amazing";
console.log(40+8+23-10);

console.log("Jonas");
console.log(23);

let firstName = "Kunjesh";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// let new = "kunjesh";  // cannot use 'new' as it is a keyword
let name = "Kunj";  // 'name' is a reserved but it still we can make it as a variable (Exception)
 
let KKR = 10;  // Constant. In other theme, the color changes
*/

/*
let javascripIsFun  = true;
console.log(javascripIsFun);

console.log(typeof true); //boolean

console.log(typeof  null);
*/


// let, const and var

/*
let age = 30;
age=31;
const birthYear = 2002;
birthYear = 2003;  // Error as we cannot change the value of birthYear

console.log(birthYear)
// If you just declare the variable = Error
const radius;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas,ageSarah); 
*/


// OPERATORS

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:

1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both 
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK 
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI );
*/


// STRINGS

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm "+firstName+", a "+(year-birthYear)+" years old "+job+"!";
console.log(jonas);

// Template Literalw
const jonasNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(jonasNew);

// We can use backticks(``) for any regular strings
console.log(`My name is Kunjesh 🚗`);
 
// We have to use newline for multi-line string
console.log("String \n\
multiple \n\
lines");
// We can create the same output without \n
console.log(`String
multiple
lines`);
*/

// TAKING DECISION (IF/ELSE)

/*
const birthYear = 1999;
let century;

if(birthYear<=2000){
  century = 19;
}else{
  century = 20;
}
console.log(century);
*/

// TYPE CONVERSION AND COERCION

/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear+18);
console.log(String(23));

// type coercion


// below all are same = type coercion
console.log("I am "+ 23 +" years old");
console.log("I am "+ "23" +" years old");
console.log("I am "+ String(23) +" years old");

// IMP
console.log("I am "+ 23 +" years old"); // I am 23 years old
console.log("23"-"10"-3); // 10
console.log("23" / "2"); // 11.5
console.log("23" * "2"); // 46

let n = '1' + 1;
n = n-1;
console.log(n);   // 10
*/

// TRULY AND FALSY VALUES

// There are total of 5 Falsy values:
// 0, '', undefined, null, NaN  (false is not included as it is already falsy)
// Every other value is consider as a truly value

/*  
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));  //true, object = we will learn it later in the course
console.log(Boolean(''));  

// JS will do coercion in the background
// for Eg.


const money = 0;
if(money){   // here, JS convert money(from 0 to false) . This conversion is based on truly or falsy value
  console.log("Don't spend it all");
}else{
  console.log("You shoud get a job!");
}

let height;
if(height){
  console.log("Yay! Height is defined");
}else{
  console.log("Height is UNDEFINED");
}

// The above example of height can might create a problem. For Eg.
let height2 = 0;
if(height2){
  console.log("Yay! Height is defined");
}else{
  console.log("Height is UNDEFINED");
}
// Here, the height is 0 but JS will perform truly/falsy results in execution of 'else' block  
*/


// Equality Operator: == vs ===

/*
const age = '18';
if(age===18)
  console.log("Strict");
if(age==18)
  console.log("Loosy");

// There are various good functionality in JS
// One of the functionality is 'prompt' where we can get user input and store it in a variable

const favourite = prompt("What's your favorite number");
console.log(favourite);
console.log(typeof favourite);
*/

// SWITCH Statement = does strict comparision [===] 
// You can also create the logic using if else-if block by using ===

/*
const day = "Tuesday";
switch (day) {
  case "monday":
    console.log("Go to programming meetup");
    break;
  case "Tuesday":
    console.log("It's Tuesday");
    break;
  default:
  console.log("Default");
}
*/

// TERNARY OPERATOR
const age = 23;
const drink = age>=18 ? "wine 🍷" : "water 🚰";
console.log(drink);




