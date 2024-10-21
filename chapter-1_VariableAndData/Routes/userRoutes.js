// System Module
const path = require("path");
const rootPath = require("../utils/rootDirectory");
const fs = require("fs");

// External Module
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.sendFile(path.join(rootPath, "views", "index.html"));
});

module.exports = userRouter;
