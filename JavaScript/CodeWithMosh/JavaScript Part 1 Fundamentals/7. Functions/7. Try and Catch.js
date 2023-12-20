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

/*
    person.fullName = true;
    console.log(person); // Error becasue 'split' takes string not boolean
    person.fullName = null;
    person.fullName = undefined;
*/

{
  const person = {
    firstName: "Mosh",
    lastName: "Hamedani",
    get fullName() {
      return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
      if (typeof value !== "string") return; // Added Line
      const parts = value.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    },
  };

  person.fullName = true;
}

// Try and Catch
{
  const person = {
    firstName: "Mosh",
    lastName: "Hamedani",
    get fullName() {
      return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
      if (typeof value !== "string") throw new Error("Value is not a string"); // Added Line
      const parts = value.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    },
  };

  try {
    person.fullName = true;
  } catch (e) {
    console.log("Message: " + e.message);
  }
}

// Error and Exception are different
// Error => A problem in our code
// Exception => A problem that occurs when our code is running
/*
    const e = new Error("message"); // Error
    throw e; // Exception
*/
