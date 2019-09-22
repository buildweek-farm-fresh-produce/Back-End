exports.seed = function (knex) {
  return knex('tool_category').insert([{
      name: 'machinery'
    },
    {
      name: 'hand'
    },
    {
      name: 'irrigation'
    }
  ]);
};