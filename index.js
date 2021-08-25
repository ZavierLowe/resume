#! /usr/bin/env node

const fs = require("fs");

fs.readFile(
  __dirname + "/info.json",
  "utf-8",
  function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      return data;
    }
  }
);
