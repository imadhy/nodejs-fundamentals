const { argv } = require('yargs');
const people = require('./people.js');

const command = argv._[0];

if (command) {
  people.getPeople(command, (err, pp) => {
    if (err) {
      console.log(err);
      return;
    };

    people.getMovie(pp.films[0], (err, film) => {
      if (err) {
        console.log(err);
        return;
      };

      console.log(pp.name);
      console.log(`Titre du film : `, film);
    })
  });
} else {
  console.log('Please enter an id');
}