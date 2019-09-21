
exports.seed = function(knex) {
  return knex('state').insert([
    {name: 'Illinois'},
    {name: 'California'},
    {name: 'New York'},
    {name: 'Washington'},
    {name: 'Colorado'}
  ]);
};