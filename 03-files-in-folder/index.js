const fs = require('fs');
const path = require('path');
fs.readdir(path.join(__dirname, 'secret-folder'), (error, file) => {
  if (error) {
    console.log(error);
  } else {
    console;
    file.forEach((el) => {
      console.log(el);
    });
  }
});
