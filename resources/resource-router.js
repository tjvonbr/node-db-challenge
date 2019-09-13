const express = require('express');

const resources = require('./resource-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  resources.find()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error finding the resources." })
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  resources.findById(id)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error finding this resource." })
    });
});

router.post('/', (req, res) => {
  const newResource = req.body;

  resources.add(newResource)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(err => {
      res.status(500).json({ error: "There was an error adding this resource." })
    });
});

module.exports = router;