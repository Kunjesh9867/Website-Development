//Global Scope
const color = "blue";
{
    console.log(color); // blue
}
{
  const message = "bye"; // Local Scope

}
// console.log(message); // Error: message is not defined


// What if we have a variable with the same name in the global scope & local scope?
// Local scope takes precedence over global scope in local area

/*
    Toothbrush and person
    Toothbrush is a global variable
    Person is a local variable
    Each person should have different toothbrush
    It is not a good idea to make global variables and access it inside local area
*/

