const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("Папка создана");
// });

const filePath = path.join(__dirname, "test", "text.txt");

fs.writeFile(filePath, "Hello NodeJS!", (err) => {
  if (err) {
    throw err;
  }

  console.log("Файл создан");
});
