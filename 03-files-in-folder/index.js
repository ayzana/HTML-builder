const fs = require('fs');
const path = require('path');
fs.readdir(path.join(__dirname, 'secret-folder'), (error, file) => {
  if (error) {
    console.log(error);
  } else {
    file.forEach((el) => {
      if (path.extname(el)) {
        fs.stat(`03-files-in-folder/secret-folder/${el}`, (err, stats) => {
          console.log(
            `${el.slice(0, el.indexOf('.'))} - ${path.extname(el).slice(1)} - ${
              stats.size / 1000
            } kb`,
          );
        });
      } else {
        return;
      }
    });
  }
});
