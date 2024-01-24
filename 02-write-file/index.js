const fs = require('fs');
const path = require('path');
let writeN = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Hello, enter text, please', (text) => {
  writeN.write(text + '\n');
  rl.on('line', (input) => {
    if (input.toString() !== 'exit') {
      writeN.write(input + '\n');
    } else {
      console.log('You entered Exit, bye');
      rl.close();
    }
  });
});
