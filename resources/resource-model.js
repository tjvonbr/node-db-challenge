const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
};

function find() {
  return db('resources')
    .select(['id', 'name'])
    .orderBy('id')
};

function findById(id) {
  return db('resources')
    .where({ id })
    .first();
};

function add(resource) {
  return db('resources')
    .insert(resource, 'id')
    .then(([id]) => findById(id));
};
