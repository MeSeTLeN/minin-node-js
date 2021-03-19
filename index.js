const http = require("http");

const server = http.createServer((req, res) => {
  res.end("<h1>Hello NodeJS!!!</h1>");
});

server.listen(3000, () => {
  console.log("Server has been started...");
});
