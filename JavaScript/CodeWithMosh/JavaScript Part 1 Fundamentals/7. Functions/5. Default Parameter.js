function interest(principal, rate, years) {
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000, 3.5, 5)); // 1750

// Default Parameters
{
  function interest(principal, rate = 3.5, years = 5) {
    return ((principal * rate) / 100) * years;
  }
  // All the default parameters must be at the end of the list of parameters
  // Otherwise we will get NaN
  // interest(principal, rate=3.5, year);
  // console.log(interest(1000, 5)) // NaN

  // There is a way to get around this
  // interest(principal, undefined, year=5);
  // But this is not a good practice
}
