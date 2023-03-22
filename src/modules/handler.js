const fs = require("fs");
const querystring = require("querystring");
const data = require("../respons-name.json");
const meanData = require("../response-meaning.json");
const url = require("url");
const path = require("path");

function autocomplete(response, query) {
  const prefix = query.toLowerCase().trim();
  const filteredWords = data.filter((word) => {
    return word.toLowerCase().includes(prefix);
  });

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(filteredWords));
}

function notFound(request, response) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("404 Not Found");
}

const searchName = function (str, obj) {
  let arr = [];
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].name.toLowerCase().startsWith(str.toLowerCase())) {
      arr.push(obj[i].name);
    }
  }
  return arr.slice(0, 3);
};

const searchMeaning = function (response, str) {

  const myMeaning = meanData.filter((e) => {
    return e[str];
  });
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(JSON.stringify(myMeaning));
};

module.exports = {
  autocomplete,
  notFound,
  searchName,
  searchMeaning,
};
