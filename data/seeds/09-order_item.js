exports.seed = function (knex) {
  return knex('order_item').insert([{
    quantity: 25,  
    produce_item_id: 1,
      order_id: '1',
      farm_id: 1
    },
    {
      quantity: 25,
      produce_item_id: 2,
      order_id: '1',
      farm_id: 2
    },
    {
      quantity: 25,
      produce_item_id: 3,
      order_id: '1',
      farm_id: 3
    },
    {
      quantity: 25,
      produce_item_id: 2,
      order_id: '2',
      farm_id: 3
    },
    {
      quantity: 25,
      produce_item_id: 3,
      order_id: '2',
      farm_id: 3
    },
    {
      quantity: 25,
      produce_item_id: 4,
      order_id: '2',
      farm_id: 2
    },
    {
      quantity: 25,
      produce_item_id: 5,
      order_id: '2',
      farm_id: 4
    },
    {
      quantity: 25,
      produce_item_id: 3,
      order_id: '3',
      farm_id: 4
    },
    {
      quantity: 25,
      produce_item_id: 3,
      order_id: '4',
      farm_id: 4
    },
    {
      quantity: 25,
      produce_item_id: 6,
      order_id: '4',
      farm_id: 2
    },
    {
      quantity: 25,
      produce_item_id: 7,
      order_id: '4',
      farm_id: 2
    },
    {
      quantity: 25,
      produce_item_id: 8,
      order_id: '4',
      farm_id: 1
    },
    {
      quantity: 25,
      produce_item_id: 9,
      order_id: '4',
      farm_id: 1
    },
    {
      quantity: 25,
      produce_item_id: 1,
      order_id: '5',
      farm_id: 3
    },
  ]);
};