const fs = require("fs");
const path = require("path");
const names = require("../respons-name.json");
const namesMean = require("../response-meaning.json");
const {
  autocomplete,
  notFound,
  searchName,
  searchMeaning,
} = require("./handler.js");

const publicHandler = require("./publicHandler");

const router = function (request, response) {
  const endpoint = request.url;
  const publicPath = path.join(__dirname, "..", "..", "public");
  if (endpoint === "/") {
    // autocomplete();
    const filePath = path.join(__dirname, "..", "..", "public", "index.html");
    fs.readFile(filePath, function (error, file) {
      if (error) {
        response.writeHead(500, {
          "Content-Type": "text/plain",
        });
        response.end("server error");
      }
      response.writeHead(200, "Content-Type: text/html");
      response.end(file);
    });
  } else if (endpoint.includes("/autocomplete")) {
    let query = endpoint.split("?q=")[1];
    autocomplete(response, query);
  } else if (endpoint.includes("/selected")) {
    let query = endpoint.split("?q=")[1];
    searchMeaning(response, query);
  } else {
    publicHandler(request, response, endpoint);
  }
};

module.exports = router;
