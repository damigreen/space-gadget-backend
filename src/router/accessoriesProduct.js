const express = require("express");
const AccessoriesProduct = require("../models/accessoriesProduct");

const accessoriesRouter = express.Router();

accessoriesRouter.get("/", async (req, res) => {
  res.send("God is good:====================");
});

module.exports = accessoriesRouter;
