const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
};

function find() {
  return db('projects')
    .select(['id', 'name'])
    .orderBy('id')
};

function findById(id) {
  return db('projects')
    .where({ id })
    .first();
};

function add(project) {
  return db('projects')
    .insert(project, 'id')
    .then(([id]) => findById(id));
};

