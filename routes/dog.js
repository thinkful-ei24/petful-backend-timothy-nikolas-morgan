const express = require('express');

const router = express.Router();

const dogs = require('../data/dogs');

router.get('/', (req, res) => {

  const dog = dogs[0];
  res.json(dog);
});


module.exports = router;