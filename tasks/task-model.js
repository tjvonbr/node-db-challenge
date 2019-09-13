const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
};

function find() {
  return db('tasks')
    .select([
      'id',
      'project_id',
      'description',
      'notes',
      'completed'
    ])
    .orderBy('project_id')
};

function findById(id) {
  return db('tasks')
    .where({ id })
    .first();
};

function add(task) {
  return db('tasks')
    .insert(task, 'id')
    .then(([id]) => findById(id))
};