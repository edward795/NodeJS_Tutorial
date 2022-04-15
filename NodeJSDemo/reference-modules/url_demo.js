const url = require("url");

const myURL = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=active"
);

//serialized url
console.log(myURL.href);
console.log(myURL.toString());

//host(root domain)
console.log(myURL.host);

//hostname (does not contain port)
console.log(myURL.hostname);

//pathname
console.log(myURL.pathname);

//serialized query
console.log(myURL.search);

//params object
console.log(myURL.searchParams);

//add params
myURL.searchParams.append("abc", "123");
console.log(myURL.searchParams);

//loop through params
myURL.searchParams.forEach((value, name) => console.log(`${name} - ${value}`));
