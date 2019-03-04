console.log('Starting app.js')

const command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

const condionnement = {
  add: 'Adding new note',
  list: 'Listing all notes',
  read: 'Reading note',
  remove: 'Removing note',
};

const resultat = condionnement[command] || 'Command not recognized';

console.log(resultat);

// if (command === 'add') {
//   console.log('Adding new note');
// } else if (command === 'list') {
//   console.log('Listing all notes');
// } else if (command === 'read') {
//   console.log('Reading note');
// } else if (command === 'remove') {
//   console.log('Removing note');
// } else {
//   console.log('Command not recognized');
// }
