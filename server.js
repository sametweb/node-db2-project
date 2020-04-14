const express = require("express");

const carsRouter = require("./cars/carsRouter");

const server = express();

server.use(express.json());

server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.status(200).send(`<h1>API is up and running...</h1>`);
});

module.exports = server;
