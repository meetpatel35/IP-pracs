let str1 = 'Hello, World!';
let str2 = "JavaScript is fun.";
let str3 = `Using template literals is great!`;
let text = "Hello";
console.log(text.length); // Output: 5
let text = "Hello";
console.log(text.charAt(0)); // Output: "H"
let text = "Hello, World!";
console.log(text.indexOf('o')); // Output: 4
console.log(text.indexOf('z')); // Output: -1
let text = "Hello, World!";
console.log(text.lastIndexOf('o')); // Output: 8
let text = "Hello, World!";
console.log(text.slice(7, 12)); // Output: "World"
let text = "Hello, World!";
console.log(text.substring(0, 5)); // Output: "Hello"
let text = "Hello, World!";
console.log(text.substr(7, 5)); // Output: "World"
let text = "Hello, World!";
console.log(text.toLowerCase()); // Output: "hello, world!"
let text = "Hello, World!";
console.log(text.toUpperCase()); // Output: "HELLO, WORLD!"
let text = "   Hello, World!   ";
console.log(text.trim()); // Output: "Hello, World!"
let text = "Hello, World!";
let words = text.split(', ');
console.log(words); // Output: ["Hello", "World!"]
let arr = ["Hello", "World!"];
let joined = arr.join(' ');
console.log(joined); // Output: "Hello World!"
let text = "Hello, World!";
let newText = text.replace('World', 'JavaScript');
console.log(newText); // Output: "Hello, JavaScript!"
let text = "Hello, World!";
console.log(text.includes('World')); // Output: true
console.log(text.includes('JavaScript')); // Output: false
let text = "Hello, World!";
console.log(text.startsWith('Hello')); // Output: true
console.log(text.startsWith('World')); // Output: false
let text = "Hello, World!";
console.log(text.endsWith('!')); // Output: true
console.log(text.endsWith('World')); // Output: false
// Creating a string
let text = "   Hello, World!   ";

// Using various string methods
console.log("Original String:", text); // "   Hello, World!   "
console.log("Length:", text.length); // 16
console.log("Trimmed:", text.trim()); // "Hello, World!"
console.log("Uppercase:", text.toUpperCase()); // "   HELLO, WORLD!   "
console.log("Lowercase:", text.toLowerCase()); // "   hello, world!   "
console.log("Slice:", text.slice(3, 8)); // "Hello"
console.log("Substring:", text.substring(3, 8)); // "Hello"
console.log("Substr:", text.substr(3, 5)); // "Hello"
console.log("Index of 'o':", text.indexOf('o')); // 9
console.log("Last index of 'o':", text.lastIndexOf('o')); // 12
console.log("Includes 'World':", text.includes('World')); // true
console.log("Starts with '   Hello':", text.startsWith('   Hello')); // true
console.log("Ends with '!' :", text.endsWith('!')); // true
console.log("Split:", text.trim().split(', ')); // ["Hello", "World!"]
console.log("Replaced:", text.replace('World', 'JavaScript')); // "   Hello, JavaScript!   "
