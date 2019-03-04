console.log('Starting app.');

const fs = require('fs');
const os = require('os');

const user = os.userInfo();

const hello = `ksad lksd ${JSON.stringify(user)} safsa fsa fsa f
asdsad
asd
asd
sad
asdas
`;

fs.appendFile('greetings.txt', hello, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
