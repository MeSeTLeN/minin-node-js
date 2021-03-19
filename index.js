const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  //   res.writeHead(200, {
  //     "Content-Type": "text/plain",
  //   });

  res.end("<h1>Hello NodeJS!!!</h1>");
});

server.listen(3000, () => {
  console.log("Server has been started...");
});
