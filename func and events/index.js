//types of variable
let isActive = true; // Boolean
let score = 100; // Number
let user = "Alice"; // String
let fruits = ["apple", "banana"]; // Array

//arithmetic operations
let sum = 5 + 3; // 8
let difference = 5 - 3; // 2
let product = 5 * 3; // 15
let quotient = 5 / 3; // 1.6667
let remainder = 5 % 3; // 2

//Conditions:

//If-Else Statement
let age = 15
if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

//Switch Case

let day = "Monday";
switch(day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("End of the week");
        break;
    default:
        console.log("Midweek");
}

//For Loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//While Loop

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//Do-While Loop

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);


//Arrow Functions (ES6):

const greet = (name) => "Hello, " + name;
console.log(greet("Bob"));

//Anonymous Functions:

setTimeout(function() {
    console.log("This will run after 2 seconds");
}, 2000);

//Classes amd object:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return "Hello, " + this.name;
    }
}

let person1 = new Person("John", 25);
console.log(person1.greet());
