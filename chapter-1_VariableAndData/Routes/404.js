// System Module
const path = require("path");
const rootPath = require("../utils/rootDirectory");

// External Module
const express = require("express");
const _404Router = express.Router();

_404Router.get("*", (req, res) => {
  res.status(404).sendFile(path.join(rootPath, "views", "404.html"));
});

module.exports = _404Router;
