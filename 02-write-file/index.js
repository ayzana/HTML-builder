const fs = require('fs');
const path = require('path');
let writeName = fs.createWriteStream(path.join(__dirname, 'name.txt'));
const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
rl.question('What is your name?', (name) => {
  writeName.write(name);
  console.log('Hello, ' + name);
  rl.on('line', (input) => {
    if (input.toString() == 'exit') {
      rl.close();
    }
  });
});
