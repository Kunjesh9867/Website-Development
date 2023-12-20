const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
};

console.log(person.fullName());

/* 
    In the above Example
    We are using a function to get the full name of the person
    
    What if we want to treat it as a property instead of a function [ person.fullName ]
    We cannot do: person.fullName() = "John Smith" because it is a function
    We cannot set the value of firstName and LastName directly from person.fullName = "John Smith"

    We can use getter and setter to solve this problem
*/

// Getter => Access properties
// Setter => Change (mutate) them
{
  const person = {
    firstName: "Mosh",
    lastName: "Hamedani",
    get fullName() {
      return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
      const parts = value.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    },
  };

  // By adding get before fullName, we can access it as a property
  console.log(person.fullName); // Mosh Hamedani

  person.fullName = "John Smith";
  console.log(person.fullName); // John Smith
}
