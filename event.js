const EventEmitter = require("node:events");

class MyBirthday extends EventEmitter {}
const myBirthday1 = new MyBirthday();

//creating event listeners

myBirthday1.on("birthday", () => {
  console.log("Happy Birthday");
});
myBirthday1.on("birthday", (bike) => {
  console.log(`I will send a ${bike} as a gift.`);
});

myBirthday1.emit("birthday","bike");
