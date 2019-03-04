const fs = require('fs');

// Sync - Blocking
const data = fs.readFile('./file.md', 'utf8', (err, data) => {
  if (err) throw err;

  console.log(data.charAt(1));
}); // blocks here until file is read
console.log(data);
console.log('Hello World !'); // will run after console.log(data)

// Async - Non Blocking
fs.readFile('./file.md', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('Hello World !'); // will run before console.log