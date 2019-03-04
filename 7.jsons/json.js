const fs = require('fs');

const originalNote = {
  title: 'Some title',
  body: true,
  comments: [
    {
      name: 'toto',
      body: 'J\'adore'
    },
    {
      name: 'adrien',
      body: 'lol'
    }
  ]
};

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);

console.log(typeof note.comments[1].body);
console.log(note.comments[1].body);
