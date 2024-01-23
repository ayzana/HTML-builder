const fs = require('fs');
const path = require('path');
fs.readdir(path.join(__dirname, 'secret-folder'), (error, file) => {
  if (error) {
    console.log(error);
  } else {
    file.forEach((el) => {
      fs.stat(`03-files-in-folder/secret-folder/${el}`, (err, stats) => {
        console.log(`${el} - ${path.extname(el)} - ${stats.size / 1000} kb`);
      });
    });
  }
});
