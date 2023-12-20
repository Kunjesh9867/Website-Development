function sum(...args) {
  console.log(args); // [1,2,3,4,5,10]
  return args.reduce( function (a,b){
    return a + b;
  })
}
console.log(sum(1, 2, 3, 4, 5, 10));
