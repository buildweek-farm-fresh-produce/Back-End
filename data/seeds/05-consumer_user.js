exports.seed = function (knex) {
  return knex('consumer_user').insert([{
      username: 'consumer_1',
      email: 'consumer_1@gmail.com',
      password: 'password',
      city_id: 1,
      state_id: 1
    },
    {
      username: 'consumer_2',
      email: 'consumer_2@gmail.com',
      password: 'password',
      city_id: 2,
      state_id: 2
    },
    {
      username: 'consumer_3',
      email: 'consumer_3@gmail.com',
      password: 'password',
      city_id: 3,
      state_id: 3
    }
  ]);
};