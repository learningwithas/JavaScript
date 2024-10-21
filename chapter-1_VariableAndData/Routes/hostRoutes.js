// System Module
const path = require("path");
const rootPath = require("../utils/rootDirectory");
const fs = require("fs");

// External Module
const express = require("express");
const hostRouter = express.Router();

hostRouter.post("/result.html", (req, res) => {
  console.log(req.body);

  const dictionay = {
    Hello: "Greeting",
    Bye: "Goodbye",
    Hi: "Greeting",
    Good: "Positive",
    Bad: "Negative",
  };

  let reqWord = req.body.word;
  for (let dicWord in dictionay) {
    if (dicWord === reqWord) {
      res.send(dictionay[dicWord]);
      break;
    }
  }

  // res.sendFile(path.join(rootPath, "views", "showResult.html"));
});

module.exports = hostRouter;
