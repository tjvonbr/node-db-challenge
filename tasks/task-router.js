const express = require('express');

const tasks = require('./task-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  tasks.find()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error finding the projects." })
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  tasks.findById(id)
    .then(task => {
      res.status(200).json(task)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error finding this task." })
    });
});

router.post('/', (req, res) => {
  const newTask = req.body;

  tasks.add(newTask)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(err => {
      res.status(500).json({ error: "There was an error adding this task." })
    });
});

module.exports = router;