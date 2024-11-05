// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
fruits.push('Date');
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: "Date"
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: "Apple"
console.log(fruits); // Output: ["Banana", "Cherry"]
fruits.unshift('Avocado');
console.log(fruits); // Output: ["Avocado", "Banana", "Cherry"]
let citrusFruits = fruits.slice(1, 3);
console.log(citrusFruits); // Output: ["Banana", "Cherry"]
fruits.splice(1, 1, 'Blackberry', 'Blueberry');
console.log(fruits); // Output: ["Avocado", "Blackberry", "Blueberry", "Cherry"]
fruits.forEach((fruit) => {
    console.log(fruit);
});
// Output:
// Avocado
// Blackberry
// Blueberry
// Cherry
let fruitLengths = fruits.map((fruit) => fruit.length);
console.log(fruitLengths); // Output: [7, 9, 9, 6]
let longFruits = fruits.filter((fruit) => fruit.length > 6);
console.log(longFruits); // Output: ["Blackberry", "Blueberry"]
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength); // Output: 31 (total length of all fruit names)
let foundFruit = fruits.find((fruit) => fruit.startsWith('B'));
console.log(foundFruit); // Output: "Blackberry"
let hasAvocado = fruits.includes('Avocado');
console.log(hasAvocado); // Output: true
let fruitString = fruits.join(', ');
console.log(fruitString); // Output: "Avocado, Blackberry, Blueberry, Cherry"
let vegetables = ['Carrot', 'Potato'];
let food = fruits.concat(vegetables);
console.log(food); // Output: ["Avocado", "Blackberry", "Blueberry", "Cherry", "Carrot", "Potato"]
fruits.sort();
console.log(fruits); // Output: ["Avocado", "Blackberry", "Blueberry", "Cherry"]
fruits.reverse();
console.log(fruits); // Output: ["Cherry", "Blueberry", "Blackberry", "Avocado"]
// Creating an array of fruits


// let fruits = ['Apple', 'Banana', 'Cherry'];

// Using various array methods
// fruits.push('Date');
// console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]

// let lastFruit = fruits.pop();
// console.log(lastFruit); // "Date"

// fruits.unshift('Avocado');
// console.log(fruits); // ["Avocado", "Apple", "Banana", "Cherry"]

// let fruitLengths = fruits.map((fruit) => fruit.length);
// console.log(fruitLengths); // [7, 5, 6, 6]

// let longFruits = fruits.filter((fruit) => fruit.length > 6);
// console.log(longFruits); // ["Avocado"]

// let foundFruit = fruits.find((fruit) => fruit.startsWith('B'));
// console.log(foundFruit); // "Banana"

// let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
// console.log(totalLength); // Total length of fruit names

// let fruitString = fruits.join(', ');
// console.log(fruitString); // "Avocado, Apple, Banana, Cherry"
