
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl
        .increments();
      tbl
        .string('name', 50)
        .notNullable()
        .unique();
      tbl
        .string('description', 250)
        .notNullable()
        .unique();
      tbl
        .boolean('completed')
        .defaultTo(false);
    })

    .createTable('resources', tbl => {
      tbl
        .increments();
      tbl
        .string('name', 50)
        .notNullable();
    })

    .createTable('tasks', tbl => {
      tbl
        .increments()
      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .string('description', 250)
        .notNullable()
        .unique();
      tbl
        .string('notes', 250)
        .notNullable();
      tbl
        .boolean('completed')
        .defaultTo(false);
    })
    
    .createTable('project_resources', tbl => {
      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .primary(['project_id', 'resource_id'])
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project-resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
