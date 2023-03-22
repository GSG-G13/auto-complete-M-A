const http = require("http");
const router = require("./modules/router");

const port = 3017;
const server = http.createServer(router);
server.listen(port, () => {
  console.log(`server is working on http://127.0.0.1:${port}`);
});
