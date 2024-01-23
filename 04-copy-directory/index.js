const fs = require('fs');
const path = require('path');
const { copyFile } = require('node:fs/promises');

function copyDir() {
  fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
  });
  fs.readdir(path.join(__dirname, 'files'), (error, files) => {
    files.forEach((file) => {
      copyFile(
        `04-copy-directory/files/${file}`,
        `04-copy-directory/files-copy/${file}`,
      );
    });
  });
}
copyDir();
