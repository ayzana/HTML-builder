const fs = require('fs');
const path = require('path');
let writeName = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Hello, enter text, please', () => {
  rl.on('line', (input) => {
    if (input.toString() !== 'exit') {
      writeName.write(input);
    } else {
      console.log('You entered Exit, bye');
      rl.close();
    }
  });
});
