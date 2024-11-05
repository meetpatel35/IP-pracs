// services/dataService.js

// Mock data to simulate database records
const mockData = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];

// Function to simulate asynchronous data fetching with a callback
function getData(callback) {
    console.log("Fetching data...");

    // Simulate a delay (e.g., database query delay) using setTimeout
    setTimeout(() => {
        console.log("Data fetch complete");

        // Call the callback with the fetched data
        callback(null, mockData);
    }, 2000); // 2-second delay
}

module.exports = { getData };
