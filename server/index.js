// const express = require("express");

import express from "express";
import { readFileSync } from "fs";
const app = express();

app.use(express.static("dist"));
app.get("/", async (req, res) => {
  const index = readFileSync(`public/index.html`, `utf8`);
  res.send(index);
  //   res.send(`<h1> REACT is EXCELLENT</h1>`);
});

app.listen(7777);
console.log("server start");
