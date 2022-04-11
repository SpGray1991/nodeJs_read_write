//Nth символ строки из файла

/* const fs = require("fs");

 const str = fs.readFileSync("./file.txt", "utf8");
const line = str.split("\n")[50];
const character = String(line).slice(7, 10);

console.log(character);  */

//Запись файла JSON

/* let obj = {
  name: "gray",
  password: 1234,
};

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

storeData(obj, "./store/f.js"); */

//Чтение файла JSON

/* const obj = JSON.parse(fs.readFileSync("./store/f.js", "utf8"));

console.log(obj); */
