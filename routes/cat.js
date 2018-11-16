const express = require("express");
const Queue = require("../queue");
const router = express.Router();

const cats = require("../data/cats");
const catShelter = new Queue();
cats.forEach(cat => catShelter.enqueue(cat));

router.get("/", (req, res, next) => {
  if (catShelter.isEmpty()) return next();
  const cat = catShelter.peek();
  res.json(cat);
});

router.delete("/", (req, res, next) => {
  if (catShelter.isEmpty()) return next();
  catShelter.dequeue();
  res.sendStatus(404);
});

module.exports = router;
