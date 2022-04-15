console.log("Hello World");

var f = require("fs");
f.readFile("app.txt", "utf8", (err, data) => {
  console.log(data);
});

f.writeFile("write.txt", 'console.log("done")', (err, data) => {
  console.log("saved!");
});
