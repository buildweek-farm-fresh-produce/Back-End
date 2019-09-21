exports.seed = function (knex) {
  return knex('produce_item').insert([{
      name: 'carrots',
      quantity: 100,
      price: 1.90,
      category_id: 2,
      farm_id: 1
    },
    {
      name: 'corn',
      quantity: 100,
      price: 1.60,
      category_id: 2,
      farm_id: 1
    },
    {
      name: 'apple',
      quantity: 100,
      price: 1.80,
      category_id: 1,
      farm_id: 2
    },
    {
      name: 'peach',
      quantity: 100,
      price: 1.95,
      category_id: 1,
      farm_id: 2
    },
    {
      name: 'potato',
      quantity: 100,
      price: .80,
      category_id: 2,
      farm_id: 3
    },
    {
      name: 'watermelon',
      quantity: 100,
      price: .95,
      category_id: 2,
      farm_id: 3
    },
    {
      name: 'broccoli',
      quantity: 100,
      price: 1.25,
      category_id: 2,
      farm_id: 4
    },
  ]);
};