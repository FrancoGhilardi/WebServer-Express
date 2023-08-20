import * as http from "http";

http
  .createServer((req, res) => {
    res.write("hello world");
    res.end();
  })
  .listen(8080);

console.log("Port:", 8080);
