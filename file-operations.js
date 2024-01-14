const fs = require('fs');

// Writing to a file
fs.writeFileSync('welcome.txt', 'Hello Node');

// Reading from a file
const dataOne = fs.readFileSync('welcome.txt', 'utf-8');
console.log(dataOne);const fs = require('fs');

// Writing to a file
fs.writeFileSync('welcome.txt', 'Hello Node');

// Reading from a file
const dataTwo = fs.readFileSync('welcome.txt', 'utf-8');
console.log(dataTwo);