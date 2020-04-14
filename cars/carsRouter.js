const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars").then((cars) => res.status(200).json(cars));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("cars")
    .where({ id })
    .first()
    .then((cars) => res.status(200).json(cars));
});

router.post("/", (req, res) => {
  const newCar = req.body;
  db("cars")
    .insert(newCar)
    .then((inserted) => {
      inserted
        ? db("cars")
            .where({ id: inserted[0] })
            .first()
            .then((car) => res.status(201).json(car))
        : res.status(500).json({ error: "error saving the car to db", err });
    })
    .catch((err) =>
      res.status(500).json({ error: "Error adding the car to the database." })
    );
});

router.patch("/");

module.exports = router;
