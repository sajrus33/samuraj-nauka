const url = require("url");
const myUrl = new URL("https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=2253s");
// link
console.log(myUrl.href);
// also same link
console.log(myUrl.toString());
// port with host
console.log(myUrl.host);
console.log(myUrl.hostname);
// path first /directory
console.log(myUrl.pathname);
// serialized query string ! :D
console.log(myUrl.search);
// Params obj of query string !
console.log(myUrl.searchParams);
// appending params
myUrl.searchParams.append("myparam", "its my");
// ==
myUrl.searchParams.forEach((value, name) => {
  console.log({ name }, { value });
});
