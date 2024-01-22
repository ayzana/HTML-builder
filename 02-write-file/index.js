const fs = require('fs');
let writeName = fs.createWriteStream('name.txt');
const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
rl.question('What is your name?', (name) => {
  writeName.write(name);
  console.log('Hello, ' + name);
});
process.stdin.on('data', (data) => {
  if (data.toString() == 'exit') {
    process.exit();
  }
});
