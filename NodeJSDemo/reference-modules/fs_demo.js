const fs = require("fs");
const path = require("path");

//create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("successfully created folder!");
});

//create & write to a file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("Successfully wrote file");
  }
);

//append to file
fs.appendFile(
  path.join(__dirname, "test", "hello.txt"),
  "I love node js",
  (err) => {
    if (err) throw err;
    console.log("success append!");
  }
);

//read file
fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//rename file

fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "helloworld.txt"),
  (err) => {
    if (err) throw error;
    console.log("file renamed!");
  }
);
