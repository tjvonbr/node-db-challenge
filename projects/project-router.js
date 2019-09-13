const express = require('express');

const projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  projects.find()
    .then(projects => {
      res.json(projects)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error finding the projects." })
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  projects.findById(id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error finding this project." })
    });
});

router.post('/', (req, res) => {
  const newProject = req.body;
  projects.add(newProject)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error adding this resource." })
    });
});

module.exports = router;