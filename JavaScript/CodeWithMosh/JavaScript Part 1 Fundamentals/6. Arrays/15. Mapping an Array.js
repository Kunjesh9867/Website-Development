// We can map an item with something else
// We generally used it with the HTML elements
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter(function (value) {
  return value >= 0;
});

const items = filtered.map(function (value) {
  return "<li>" + value + "</li>";
});

console.log(items);
console.log(typeof items); // object

// We can join the items with the join() method
const html = items.join();
console.log(html); // <li>1</li>,<li>2</li>,<li>3</li>
console.log(typeof html); // string


/*
    Chaining:
    
    const items = numbers
    .filter(n => n >= 0)   
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
*/
