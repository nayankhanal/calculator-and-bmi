// var daju = require("./second.js");
// console.log(daju);

// import {nayan} from "./second.js"
// var hey =nayan;
// console.log(hey);
const {nayan,harry} = require("./second");
const http = require("http");
const url = require("url");
const server = http.createServer(function(req, res) {
  if (req.url == "/") {
    // res.statusCode = 200;
    // res.setHeader("Content-Type":"text/html")
    // res.writeHead(200,{"Content-Type": "text/html"});
    res.end("<h1>Nayan is a Don.</h1>");
  } else if (req.url == "/contact") {
    // res.writeHead(200,{"Content-Type": "text/html"});
    res.end("<h1>contactUs</h1>");
  } else {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.end("No Page here");
  }
});

server.listen(3000, function() {
  console.log("The server started at the port 3000.");
});

console.log(nayan);
console.log(harry);
