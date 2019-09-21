exports.seed = function (knex) {
  return knex('farm').insert([{
      name: 'Organic Farms',
      address: '1213 Dairy Rd.',
      year_founded: 1955,
      bio: 'We sell only the best.',
      farmer_id: 1,
      city_id: 1,
      state_id: 1
    },
    {
      name: 'A.R. Farms',
      address: '2213 Orchard Rd.',
      year_founded: 1908,
      bio: 'We are a farm.',
      farmer_id: 2,
      city_id: 2,
      state_id: 2
    },
    {
      name: 'Lambda Farms',
      address: '3213 Mountain View Rd.',
      year_founded: 2005,
      bio: 'Lorem Ipsum.',
      farmer_id: 3,
      city_id: 3,
      state_id: 3
    },
    {
      name: 'Blueberry Farms',
      address: '21576 Albers Rd.',
      year_founded: 1963,
      bio: 'Locally Grown Produce.',
      farmer_id: 3,
      city_id: 2,
      state_id: 2
    }
  ]);
};