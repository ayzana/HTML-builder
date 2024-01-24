const fs = require('fs');
const path = require('path');
fs.readdir(
  path.join(__dirname, 'secret-folder'),
  { withFileTypes: true },
  (error, file) => {
    if (error) {
      console.log(error);
    } else {
      file.forEach((el) => {
        if (el.isFile() === true) {
          fs.stat(
            `03-files-in-folder/secret-folder/${el.name}`,
            (err, stats) => {
              let name = el.name;
              name = name.toString();
              console.log(
                `${name.slice(0, name.indexOf('.'))} - ${path
                  .extname(name)
                  .slice(1)} - ${stats.size / 1000} kb`,
              );
            },
          );
        } else {
          return;
        }
      });
    }
  },
);
