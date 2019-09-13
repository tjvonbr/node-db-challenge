
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {
          project_id: 1,
          resource_id: 1
        },
        {
          project_id: 1,
          resource_id: 9
        },
        {
          project_id: 1,
          resource_id: 10
        },
        {
          project_id: 2,
          resource_id: 4
        },
        {
          project_id: 2,
          resource_id: 10
        },
        {
          project_id: 3,
          resource_id: 10
        },
        {
          project_id: 4,
          resource_id: 10
        },
        {
          project_id: 5,
          resource_id: 1
        },
        {
          project_id: 5,
          resource_id: 4
        },
        {
          project_id: 5,
          resource_id: 10
        },
      ]);
    });
};
