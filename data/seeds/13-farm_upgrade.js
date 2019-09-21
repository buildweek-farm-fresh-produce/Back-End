
exports.seed = function(knex) {
      return knex('farm_upgrade').insert([
        {name: '2020 John Deere', price: 1000, purchased: 0, farm_id: 1},
        {name: 'Latest Drip Irrigation', price: 2000, purchased: 0, farm_id: 1},
        {name: '2019 John Deere', price: 2000, purchased: 0, farm_id: 2},
        {name: '2018 John Deere', price: 2000, purchased: 0, farm_id: 3},
        {name: 'Latest Drip Irrigation', price: 3000, purchased: 0, farm_id: 3},
        {name: '2021 John Deere', price: 9000, purchased: 0, farm_id: 4},
      ]);
};
