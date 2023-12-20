'use strict';

function hell(){
  console.log(this);
}
hell();
//? Scoping in Practice
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

*/
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'kunjesh';
// let job = 'sandwich artist';
// const year = 2023;

// console.log(addExpression(5,5));

// function addDeclaration(a,b){
//   return a+b;
// }

// var addExpression = function(a,b){
//   return a+b;
// }; 