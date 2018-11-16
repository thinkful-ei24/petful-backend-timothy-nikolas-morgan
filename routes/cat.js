const express = require('express');

const router = express.Router();

const cats = require('../data/cats');

router.get('/', (req, res) => {

  const cat = cats[0];

  res.json(cat);
});


module.exports = router;