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
    .catch((err) => res.status(500).json({ error: "error saving the record" }));
});

router.patch("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  db("cars")
    .update(changes)
    .where({ id })
    .then((updated) => {
      updated
        ? db("cars")
            .where({ id })
            .first()
            .then((updatedCar) => res.status(200).json(updatedCar))
        : res.status(400).json({ error: "couldn't find a record with the id" });
    })
    .catch((err) =>
      res.status(500).json({ error: "error updating the record", err })
    );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("cars")
    .del()
    .where({ id })
    .then((deleted) =>
      deleted
        ? res.status(204).end()
        : res
            .status(404)
            .json({ error: "the record with specified id couldn't be found" })
    )
    .catch((err) =>
      res.status(500).json({ error: "error deleting the record", err })
    );
});

module.exports = router;
