// In the previous lesson, we have used function decalaration, Here we can also use arrow function
const search = courses.find(function (argument) {
  return argument.name === "a";
});
console.log(search);

const search2 = courses.find((argument) => { // => is called "fat arrow"
  return argument.name === "a";
});
console.log(search);
// If there is only one line of action = you can remove the braces {} & () and return keyword 
//            argument => arugment.name === "a"
// We say it "argument goes to arugment.name"
// If there is no parameter, then use () => {} 

