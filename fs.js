const fs = require("fs");

const output = fs.readFileSync("./hello.txt", "utf-8");

const text = "Hello Shakil";
console.log("I am Shakib Al Hasan");
fs.writeFileSync("./write.txt", text);
console.log(output);
console.log(text);
console.log("I am Shakib Khan");
