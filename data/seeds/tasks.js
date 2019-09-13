
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          description: 'create landing page',
          notes: 'not quite done',
          completed: false
        },
        {
          project_id: 1,
          description: 'create navbar',
          notes: 'not quite done',
          completed: false
        },
        {
          project_id: 1,
          description: 'create contact page',
          notes: 'not quite done',
          completed: false
        },
        {
          project_id: 2,
          description: 'read same medium article tutorial',
          notes: 'not quite done',
          completed: false
        },
        {
          project_id: 3,
          description: 'quit using the gui',
          notes: 'not quite done',
          completed: false
        },
        {
          project_id: 3,
          description: 'complete online tutorial',
          notes: 'not quite done',
          completed: false
        },
        {
          project_id: 4,
          description: 'keep working on JS challenges',
          notes: 'not quite done',
          completed: false
        },
        {
          project_id: 5,
          description: 'work through previous projects',
          notes: 'not quite done',
          completed: false
        },
        {
          project_id: 5,
          description: 'refactor previous projects using redux state management',
          notes: 'not quite done',
          completed: false
        },
        {
          project_id: 5,
          description: 'read through redux documentation',
          notes: 'not quite done',
          completed: false
        },
      ]);
    });
};
