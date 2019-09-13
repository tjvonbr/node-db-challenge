
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Finish portfolio website',
          description: 'Finish my website before I start looking for jobs',
          completed: false
        },
        {
          name: 'Learn RegEx',
          description: 'Polish RegEx skills',
          completed: false
        },
        {
          name: 'Build better command of the command line',
          description: 'Become more comfortable creating, editing, etc. files',
          completed: false
        },
        {
          name: 'Work on vanilla JS',
          description: 'Complete the JS in 30 days challenge',
          completed: false
        },
        {
          name: 'Brush up on redux',
          description: 'Look at previous redux projects to retain memory',
          completed: false
        },
      ]);
    });
};
