const now = new Date(); // Current date and time
console.log(now);

const date1 = new Date("May 11 2018 09:00");
console.log(date1);

const date2 = new Date(2018, 4, 11, 9); // May
// Month is zero based -> 0 - Jan,   11 - Dec

// All these Date object has a lot of methods (setter and getter)
now.setFullYear(2017);