const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db("sales").then((sales) => res.status(200).json(sales));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("sales")
    .where({ id })
    .first()
    .then((sale) => res.status(200).json(sale));
});

router.post("/", (req, res) => {
  const newSale = req.body;
  db("sales")
    .insert(newSale)
    .then((inserted) => {
      inserted
        ? db("sales")
            .where({ id: inserted[0] })
            .first()
            .then((sale) => res.status(201).json(sale))
        : res.status(500).json({ error: "error saving the car to db", err });
    })
    .catch((err) =>
      res.status(500).json({ error: "error saving the record", err })
    );
});

module.exports = router;
