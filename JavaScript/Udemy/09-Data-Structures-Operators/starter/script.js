// 'use strict';
'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // console.log(this.starterMenu[starterIndex]);
    // return this.starterMenu[starterIndex];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//? Destructing Array = ES6
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // console.log(this.starterMenu[starterIndex]);
    // return this.starterMenu[starterIndex];
  },
};


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // Destructuring
console.log(x, y, z); // 2 3 4
console.log(arr); // original array is same => (3) [2,3,4]

const [first, second] = restaurant.categories; // 1st 2nd
console.log(first, second); // Italian Pizzeria

const [first2, , third] = restaurant.categories; // 1st 3rd
console.log(first2, third); // Italian Vegetarian

// Switching variables
let [main, secondary] = restaurant.categories;
[main, secondary] = [secondary, main]; // Swapping the elements
console.log(main, secondary);

// Receive 2 return values from a function
const [startedMenuItem, mainCourseItem] = restaurant.order(2, 0);
console.log(startedMenuItem, mainCourseItem); // Garlic Bread  Pizza

// nested array element into variable
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Default values
const [p,q,r] = [8,9];
console.log(p,q,r); // 8 9 undefined

const [p2=1,q2=1,r2=1] = [8,9];
console.log(p2,q2,r2); // 8 9 1
*/

//? Destructuring Objects

/*
// making variable of object type from restraunt
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// When you fetch data in API form, it usually comes in the form of object
// There, you can use this

// Aliases
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); // Same as line 92

// Default values

//const {menu, starterMenu: starters=[]} = restaurant; // menu = undefined
//console.log(menu,starters);

const { menu = [], starterMenu: starters = [] } = restaurant; // menu = []
console.log(menu, starters);

// Mutating objects
let a = 111;
let b = 999;
const obj = { a: 63, b: 7, c: 14 };
//{a,b} = obj; // Error, JS expect code blocks so we should enclosed in ()
({ a, b } = obj);
console.log(a, b);

// Nested objects
const { fri } = openingHours;
console.log(fri);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});
*/

//? Spread Operator

/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const badNewArr2 = [1, 2, arr]; // [1,2,[7,8,9]] = not expected
const newArr = [1, 2, ...arr]; // spread operator
console.log(newArr); // [1,2,7,8,9]

console.log(...newArr); // 1 2 7 8 9
console.log(1, 2, 7, 8, 9); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// These all works on iterables
// Iterables: arrays, strings, maps, sets. NOT objects

const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters); // ['J', 'o', 'n', 'a', 's', '', 'S.']
console.log(...str); // J o n a s
console.log('j', 'o'); // j o
//console.log(`${...str} Schmedtmann`); // Error: multiple values seperated by comma are usually only expected when we pass arguments into a function
// or when we build a new array

// Real-world example
const ingredients = [
  //prompt("Let's make pasta! Ingredient 1?"),
  //prompt('Ingredient 2?'),
  //prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Since 2018, spread operator is also works on objects, even though objects are not iterable
// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant  .name);
*/

//? Rest pattern and parameter
/*
// Rest is opposite of sprear operator
// Must be the last element

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// It is called REST, because it will put rest of the element of array and put them into new array

// In this case, it is called 'others'

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  // console.log(numbers); // In the form of array
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  return sum;
};

console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));

// Concept
const x = [23, 5, 7];
add(...x); // 23,5,7  We have already discussed it

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushroom');

// REST = where we would write variables, seperated by comma, NOT values
*/

//? Short Circuting (&& and ||)
/*
console.log(3 || 'Jonas');  //3
console.log(typeof (3 || 'Jonas')); // number

console.log('' || 'Jonas'); // Jonas

console.log(true || 0); //true

console.log(false || '0'); // 0
console.log(typeof(false || '0')); // string

console.log(undefined || null); // null
console.log(typeof(undefined || null)); // object(typeof null)

console.log(undefined || 0 || '0' || 'Hello'); // string
// short circuit, rest of the opreator/statement


const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1); // 10
// The above answer is 10 because there is no numGuests in restraunt
// numGuests = undefined  = falsy value 

// Instead of above expression, we can use
const guest2 = restaurant.numGuests || 10; // Short-circuting
console.log(guest2); // 10

// Problem with 'OR'
restaurant.numGuests = 0; // guest = 0
const guest4 = restaurant.numGuests || 10;
console.log(guest4);// 10
// But the real answer should be 0 
// We will explore it later in the course

// 'AND' operator = return the falsy value if found 
const guest3 = restaurant.numGuests && 10;
console.log('guest3: '+guest3); // 0, because in AND the result will be false if first value is itself falsy

console.log(7 && 'Hello'); // Hello
*/

//? Nullish Coalescing Operator (??)

/*
// To fix the above problem, we have nullish coalescing operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); // 0 
*/

//? Logical Assignment Operators
/*
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest2.numGuests = rest1.numGuests || 10;
console.log(rest2.numGuests); // 20

// rest1.numGuests ||=  10; // rest1.numGuest which is 0 set to 10
// rest2.numGuests ||=  10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner  = rest1.owner && '<ANONYMOUS';
// rest2.owner  = rest2.owner && '<ANONYMOUS';
rest1.owner &&= '<ANONYMOUS';
rest2.owner &&= '<ANONYMOUS';

console.log(rest1);
console.log(rest2);

*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1,'Player1','Player2','Player3'];
console.log(players1Final);

const {odds:{team1, x:draw, team2}} = game;
console.log(team1, draw, team2) ;

const printGoal = function(...players){
  console.log(`${players.length} goals were scored!`);
}

printGoal('Kunjesh', 'Aryan', 'Saurin');
printGoal('Kunjesh', 'Aryan',);
printGoal(game.scored);  // not a desired output
printGoal(...game.scored); 

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

//? DATED: 30 May 2023

//? Looping for-of Loop = Introduce in ES6
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item); // Just the item
}
// What if you want index of item
for (const [i, item] of menu.entries()) {
  console.log(i + ' ' + item); // index + entry
}
console.log(menu.entries()); // some weird stuff ...menu.entries() is correct
// Array containing [0, Item1] = 0 is index, Item1 is item at index 0
*/

//? Enhanced Object Literals
/*
const weekdays = ['mon', 'tue','wed','thr','fri','sat','sun'];
const openingHours2 = {
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  [weekdays[2]]: {
    open: 11,
    close: 23,
  },
  [`object-${4-3}`]: {   // We can compute NAME as well
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literal (When the variable names are same)
  openingHours2,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //   // console.log(this.starterMenu[starterIndex]);
  //   // return this.starterMenu[starterIndex];
  // },

  // ES6 enhanced object literals (for method)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // console.log(this.starterMenu[starterIndex]);
    // return this.starterMenu[starterIndex];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
*/

//? Optional Chaining (?.)
console.log(restaurant.openingHours.mon); // To get the openingHours for Monday => But this doesn't exists (undefined)

//Concept
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); // undefined.something is ERROR
console.log(restaurant.openingHours.fri.open); // This exists = Answer:11

// With OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open); //😉
