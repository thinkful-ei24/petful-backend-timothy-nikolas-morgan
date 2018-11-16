const express = require('express');
const Queue = require('../queue');
const router = express.Router();

const dogs = require('../data/dogs');
const dogShelter = new Queue();
dogs.forEach(dog => dogShelter.enqueue(dog));

router.get('/', (req, res, next) => {
  if (dogShelter.isEmpty()) return next();
  const dog = dogShelter.peek();
  res.json(dog);
});

router.delete('/', (req, res, next) => {
  if (dogShelter.isEmpty()) return next();
  const adoptedDog = dogShelter.dequeue();
  res.sendStatus(404);
});

module.exports = router;
