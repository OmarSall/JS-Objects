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

