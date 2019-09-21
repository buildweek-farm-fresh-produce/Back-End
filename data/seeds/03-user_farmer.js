
exports.seed = function(knex) {
      return knex('user_farmer').insert([
        {username: 'local_farmer1', email: 'local_farmer1@gmail.com', password:'password'},
        {username: 'local_farmer2', email: 'local_farmer2@gmail.com', password:'password'},
        {username: 'local_farmer3', email: 'local_farmer3@gmail.com', password:'password'}
      ]);
};
