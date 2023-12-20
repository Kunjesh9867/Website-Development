// Enumerating = iteration
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) {
  console.log(key, circle[key]);
}
/* 
  ^ We only want properties not methods for the above code 
  if(typeof circle[key] !== 'function'){
    console.log(key, circle[key]); // radius 1 
  }
*/

// for (let key of circle) {
//    We cannot use for of with non-iterable like object, maps and array are iterable so we can use it.
//   console.log(key); // TypeError: circle is not iterable
// }
// But we can use it in this way:


/*
  const keys = Object.keys(circle); 
  console.log(keys) // ["radius", "draw"]

*/
for (let key of Object.keys(circle)) {
  console.log(key); // radius, draw
}

for (let entry of Object.entries(circle)) {
  console.log(entry); // ["radius", 1], ["draw", ƒ]
}

if ("radius" in circle) {
  console.log("yes");
}

