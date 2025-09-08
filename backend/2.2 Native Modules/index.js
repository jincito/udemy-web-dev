const fs = require("fs");

let lol = fs.readFile("message.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
