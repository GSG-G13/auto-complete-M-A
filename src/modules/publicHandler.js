const fs = require("fs");
const path = require("path");

const staticFileHandler = function (request, response, endpoint) {
  const extensionType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
  };

  const extension = path.extname(endpoint);
  const filePath = path.join(__dirname, "..", "..", "public", endpoint);

  fs.readFile(filePath, function (error, file) {
    if (error) {
      response.writeHead(500, {
        "Content-Type": "text/plain",
      });
      response.end("SERVER ERROR");
    } else {
      response.writeHead(200, { "Content-Type": extensionType[extension] });
      response.end(file);
    }
  });
};

module.exports = staticFileHandler;
