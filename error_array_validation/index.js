function checkAge(age) {
    if (age < 18) {
        throw new Error("You must be at least 18.");
    }
    return "Age is acceptable.";
}
try {
    console.log(checkAge(15));
} catch (error) {
    console.log(error.message);
}

let numbers = [1, 2, 3, 4];
numbers.push(5); 
numbers.pop(); 
numbers.shift(); 
numbers.unshift(0); 
console.log(numbers);

let fruits = ["apple", "banana", "orange"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});

let greeting = "Hello, World!";
console.log(greeting.length); 
console.log(greeting.toUpperCase()); 
console.log(greeting.toLowerCase()); 
let str = "JavaScript is awesome!";
let newStr = str.replace("awesome", "great");
console.log(newStr); 
let sentence = "The quick brown fox";
console.log(sentence.substring(4, 9)); 
console.log(sentence.split(" "));

let today = new Date();
console.log(today); 
let today1 = new Date();
console.log(today1.getFullYear()); 
console.log(today1.getMonth()); 
console.log(today1.getDate()); 
let date = new Date();
let formattedDate = date.toDateString();
console.log(formattedDate);
