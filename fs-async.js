const fs = require("fs");
console.log("I am Shakib Al Hasan");
fs.readFile(__dirname + "/hello.txt", "utf-8", (err, data) => {
  if (err) {
    throw new Error("Error ! reading file!");
  }
  console.log(data);
});
console.log("I am Shakib Khan");

fs.writeFile(__dirname + "/write-async.txt", "Hi React Devs", (err) => {
  if (err) {
    throw new Error("Error ! Writing File!");
    }
});
