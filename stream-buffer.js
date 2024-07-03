const fs = require("fs");
/* fs.readFile(__dirname + "/hello.txt", "utf-8", (err, data) => {
  if (err) {
    throw new Error("Error ! reading file!");
  }
  fs.writeFile(__dirname + "/write-async.txt",data, (err) => {
    if (err) {
      throw new Error("Error ! Writing File!");
      }
  });
}); */

// create a readable stream

const readableStream = fs.createReadStream(__dirname + "/hello.txt", "utf-8");

//create a writeableStream
const writeableStream = fs.createWriteStream(__dirname + "/hello-write.txt");

readableStream.on("data", (data) => {
  writeableStream.write(data, (err) => {
    if (err) {
      throw new Error("Error ! Writing File!");
    }
    readableStream.pipe(writeableStream);
  });
});

readableStream.on("error", (err) => {
  throw new Error(err);
});

writeableStream.on("error", (err) => {
  throw new Error(err);
});

writeableStream.on("finish", () => {
  console.log("Finished Writing file!");
});
