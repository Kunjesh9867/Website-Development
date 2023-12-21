function fizzBuzz(input) {
    if (input % 3 === 0 && input % 5 == 0) {
        console.log("FizzBuzz");
    } else if (input % 3 === 0) {
        console.log("Fizz");
    } else if (input % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log("Not divisible by 3 or 5");
    }
}

fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(30);
fizzBuzz(2);



// typeof NaN -> number