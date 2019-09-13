
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: 'keyboard' // 1
        },
        {
          name: 'mouse' // 2
        },
        {
          name: 'RegEx for Dummies' // 3
        },
        {
          name: 'Redux for Dummies' // 4
        },
        {
          name: 'Udemy Traversy Course on Redux' // 5
        },
        {
          name: 'desktop monitors' // 6
        },
        {
          name: 'coffee' // 7
        },
        {
          name: 'stable internet connection' // 8
        },
        {
          name: 'HTML/CSS for Beginners' // 9
        },
        {
          name: 'Google' // 10
        },
      ]);
    });
};
