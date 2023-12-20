let person = { name: "Mosh" };
console.log(person);

/*
    person.toString() returns [object Object] 
    
    for(let key in person){
        console.log(key) 
    }
    This does not returns all the properties in the ObjectBase (just name)

    console.log(Object.keys(person))  //(just name)

    This is the scenario then, how come we can access other properties like toString() or other?

    The answer is:
        In JS, properties have attributes attached to them. 
        Sometimes, these attributes prevent the properties from being enumerated.


*/

let ObjectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(ObjectBase, "toString");

console.log(descriptor);
// returns:
// {writable: true, enumerable: false, configurable: true, value: ƒ}

/*
    enumerable: false => cannot see
    configurable: true => can be deleted 
    writable: true => can be changed
*/

// So, when you create the Object, you can set these.
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

// Writable => false
person.name = "John";
console.log(person.name); // Mosh

// Configurable => false
delete person.name;
console.log(person.name); // Mosh

// Enumerable => false
console.log(Object.keys(person)); // []
    