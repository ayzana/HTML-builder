const fs = require('fs');
const path = require('path');
const filePath = path.resolve('01-read-file', 'text.txt');
const stream = fs.createReadStream(filePath, { encoding: 'utf-8' });
stream.on('data', (data) => {
  console.log(data);
});
