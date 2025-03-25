// Exercise:

// Create the getFullNameFromPerson function

// const user = {
//   firstName: 'John',
//   lastName: 'Smith'
// }

// getFullNameFromPerson(user); // John Smith

function getFullNameFromPerson(user) {
    return user.firstName + " " +  user.lastName;
}

// Exercise: write the getValueByPropertyName function

// const user = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 60
// };
// const propertyName = 'age';

// const value = getValueByPropertyName(user, propertyName);
// console.log(value); // 60

function getValueByPropertyName(user, propertyName) {
    return user[propertyName];
}

// Exercise:

// Write the createUser function

function createUser(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    };
}

// const user = createUser('John', 'Smith');
// console.log(user);
// {
//   firstName: 'John',
//   lastName: 'Smith'  
// }

// Exercise:
// Rewrite your createUser function to use property shorthands

function createUser(firstName, lastName) {
    return { firstName, lastName };
}

// Question: what will be printed into the console?
// console.log({} === {});
// false

// When you create {} (an empty object), JavaScript allocates a new space in memory for that object.

// When you create another {}, it is a completely different object, even though they might look identical.

// The strict equality operator (===) checks whether the two values reference the same memory location, not just if they have the same content.

//HomeWork

// 1. Write the checkIfPropertyIsDefined function, which checks if the value of 
// the property isn't undefined 

// const user = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: undefined
// }

// checkIfPropertyIsDefined(user, 'firstName'); // true
// checkIfPropertyIsDefined(user, 'age'); // false
// checkIfPropertyIsDefined(user, 'height'); // false
// Hint: try using the if  statements first

function checkIfPropertyIsDefined(object, objectProperty) {
    if (object.hasOwnProperty(objectProperty) && object[objectProperty] !== undefined) {
        return true;
    }

    return false;
}

// Then, try to rewrite your function to use a single line with the return  statement.

function checkIfPropertyIsDefined(object, objectProperty) {
    return object.hasOwnProperty(objectProperty) && object[objectProperty] !== undefined;
}

//2. Add up all of the salaries

const salaries = {
  john: 50,
  adam: 100,
  katie: 75
}

const salarySum = Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
console.log(salarySum);

// 3. Write the isObject function. Use the typeof operator.

function isObject(value) {
    return typeof value === 'object' && value !== null;
}

isObject({}); // true
isObject(10); // false
isObject(null); // false

// 4. Write the removeProperty function. It should return 
// true  if there is a property with a given key to remove. 
// Otherwise, it should return false.

function removeProperty(object, objectProperty) {
    if (object.hasOwnProperty(objectProperty)) {
        delete object[objectProperty];
        return true;
    }

    return false;
}

const user = {
    name: 'John'
  }
  
removeProperty(user, 'name'); // true
removeProperty(user, 'name'); // false
removeProperty(user, 'weight'); // false

console.log(user); // {}

// 5. Write the checkIfUsersHaveTheSameName function

function checkIfUsersHaveTheSameName(userFirst, userSecond) {
    return userFirst.firstName === userSecond.firstName && userFirst.lastName === userSecond.lastName;
}

const firstJohn = {
  firstName: 'John',
  lastName: 'Smith'
}

const secondJohn = {
  firstName: 'John',
  lastName: 'Smith'
}

const adam = {
  firstName: 'Adam',
  lastName: 'Johnson'
}

checkIfUsersHaveTheSameName(firstJohn, secondJohn); // true
checkIfUsersHaveTheSameName(firstJohn, adam); // false

// 6. Write the getVoteCount function

function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}

getVoteCount({ upvotes: 10, downvotes: 5 }); // 5
getVoteCount({ upvotes: 75, downvotes: 90 }); // -15
getVoteCount({ upvotes: 50, downvotes: 50 }); // 0

// 7. Write the getCubeVolume function

function getCubeVolume(cube) {
    return cube.width * cube.length * cube.height;
}

getCubeVolume({ width: 10, length: 5, height: 2 }); // 100
getCubeVolume({ width: 100, length: 500, height: 0 }); // 0
getCubeVolume({ width: 15, length: 2, height: 5 }); // 150

// 8. Write the getCityInformation function, use template 
// literals

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

function getCityInformation(city) {
    return `${city.name} is in ${city.country} and has an area of ${city.areaInKilometers} square kilometers`;
}

getCityInformation({
  name: 'Warsaw',
  country: 'Poland',
  areaInKilometers: 517
}) // Warsaw is in Poland and has an area of 517 square kilometers

// 9. Write the getUserCopy  function. Assume that users only 
// have the firstName and lastName.

function getUserCopy(user) {
    return { ...user};
}

const john = {
    firstName: 'John',
    lastName: 'Smith'
  }
  
  const newUser = getUserCopy(john);
  console.log(newUser.firstName); // John
  console.log(newUser.lastName); // Smith
  console.log(newUser === john); // false <-- this is crucial


// 10. Write the getObjectWithoutProperty function.

function getObjectWithoutProperty(object, objectProperty) {
    const newObject = { ...object};
    delete newObject[objectProperty];
    return newObject;
}

const user = {
  name: 'John'
}

const userWithoutName = getObjectWithoutProperty(user, 'name');

console.log(userWithoutName !== user); // true
console.log(userWithoutName.name); // undefined
console.log(user.name); // John

// 11. https://www.codewars.com/kata/571f1eb77e8954a812000837

// Task
// Give you a function animal, accept 1 parameter:obj like this:
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
// "This white dog has 4 legs."

function animal(object) {
    return `This ${object.color} ${object.name} has ${object.legs} legs.`;
}

console.log(animal({ name: "dog", legs: 4, color: "white" })); 
//This white dog has 4 legs.

// 12. Object debugging

// let rooms = {
//     first: {
//       description: 'This is the first room' // 1. missing comma
//       items: {
//         chair: 'The old chair looks comfortable',
//         lamp: 'This lamp looks ancient'
//     }, // 2. closing for the first item is missing 
//     second: {
//       description: 'This is the second room'
//       items: {
//         couch: 'This couch looks like it would hurt your back, // 3. missing closing of the string
//         table: 'On the table there is an unopened bottle of water'
//       }
//     }
//   }

  // Corrected version

//   let rooms = {
//     first: {
//       description: 'This is the first room',
//       items: {
//         chair: 'The old chair looks comfortable',
//         lamp: 'This lamp looks ancient'
//       }
//     },  
//     second: {
//       description: 'This is the second room',
//       items: {
//         couch: 'This couch looks like it would hurt your back',
//         table: 'On the table there is an unopened bottle of water'
//       }
//     }
//   }
  
// 13. Write the addContact function that returns a new contacts 
// object with an additional property.
// The new property should contain an object with the name  
// and phoneNumber  properties.
// Make sure not to modify the contacts provided as an argument to 
// the addContact function.

function addContact(contacts, name, phoneNumber) {
    return {
        ...contacts,
        [name]: { name, phoneNumber}
    };
}

const contacts = {};
const contactsWithJohn = addContact(contacts, 'John', '123 456 789');

console.log(contactsWithJohn.John.name); // John
console.log(contactsWithJohn.John.phoneNumber); // '123 456 789'

console.log(contacts === contactsWithJohn); // false
console.log(contacts.John); // undefined

const contactsWithKateAndJohn = addContact(contactsWithJohn, 'Kate', '789 123 456');
console.log(contactsWithKateAndJohn.John.name); // John
console.log(contactsWithKateAndJohn.Kate.name); // Kate


// 14. Write the findContact function that returns a
//  string representing the contact with a given name.
//  If a contact with a given name does not exist, return undefined.

function addContact(contacts, name, phoneNumber) {
    return {
        ...contacts,
        [name]: { name, phoneNumber}
    };
}

function findContact(contacts, name) {
    if (!contacts[name]) {
        return undefined;
    }

    return `Name: ${contacts[name].name}, Phone: ${contacts[name].phoneNumber}`;
}

const contacts = {};
const contactsWithJohn = addContact(contacts, 'John', '123 456 789');

const johnContactInfo = findContact(contactsWithJohn, 'John');
console.log(johnContactInfo); // "Name: John, Phone: 123 456 789"

const contactsWithKate = addContact({}, 'Kate', '789 123 456');
const kateContactInfo = findContact(contactsWithKate, 'Kate');
console.log(kateContactInfo); // "Name: Kate, Phone: 789 123 456"

// 15. create the validateIfObjectIsAUser function
// that takes an object as an argument and returns true if the object 
// meets the following requirements:
//  1. has the firstName  property with a value of a string type
//  2. has the lastName  property with a value of a string type
//  3. has the age  property with a value of a number type
//  4. has the greet  property with a value of a function type, and 
//  the function returns a string containing the user's firstName 
//  and the user's lastName 

function validateIfObjectIsAUser(object) {
    return typeof object.firstName === "string" &&
           typeof object.lastName === "string" &&
           typeof object.age === "number" &&
           typeof object.greet === "function" &&
           typeof object.greet() === "string" &&
           object.greet().includes(object.firstName) &&
           object.greet().includes(object.lastName);
}

const user = {
    firstName: 'Bob',
    lastName: 'Ross',
    age: 40,
    greet() {
      return "Hi, I'm Bob Ross!";
    }
  }
  const objectExample = {
    firstName: 'Kate',
    lastName: 'Williams',
    age: 40,
    greet() {
      return "Hi, I'm Kate!";
    }
  }
  const car = {
    make: 'Ferrari',
    model: 'F40',
    greet() {
      return "<engine noise>";
    }
  }
  
  console.log(validateIfObjectIsAUser(user)); // true
  console.log(validateIfObjectIsAUser(objectExample)); // false
  console.log(validateIfObjectIsAUser(car)); // false