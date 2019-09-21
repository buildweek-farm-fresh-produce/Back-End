
exports.seed = function(knex) {
      return knex('produce_category').insert([
        {name: 'fruits'},
        {name: 'vegetables'},
        {name: 'grains'},
        {name: 'meats'},
        {name: 'dairy'}
      ]);
};
