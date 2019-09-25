exports.seed = function (knex) {
  return knex('order_item').insert([{
      quantity: 25,
      produce_item_id: 1,
      order_id: 'supersecret1',
      farm_id: 1,
      consumer_id: 1
    },
    {
      quantity: 25,
      produce_item_id: 2,
      order_id: 'supersecret1',
      farm_id: 2,
      consumer_id: 1
    },
    {
      quantity: 25,
      produce_item_id: 3,
      order_id: 'supersecret1',
      farm_id: 3,
      consumer_id: 1
    },
    {
      quantity: 25,
      produce_item_id: 2,
      order_id: 'supersecret12',
      farm_id: 3,
      consumer_id: 1
    },
    {
      quantity: 25,
      produce_item_id: 3,
      order_id: 'supersecret12',
      farm_id: 3,
      consumer_id: 2
    },
    {
      quantity: 25,
      produce_item_id: 4,
      order_id: 'supersecret123',
      farm_id: 2,
      consumer_id: 3
    },
    {
      quantity: 25,
      produce_item_id: 5,
      order_id: 'supersecret123',
      farm_id: 4,
      consumer_id: 3
    },
    {
      quantity: 25,
      produce_item_id: 3,
      order_id: 'supersecret123',
      farm_id: 4,
      consumer_id: 3
    },
    {
      quantity: 25,
      produce_item_id: 3,
      order_id: 'supersecret12345',
      farm_id: 4,
      consumer_id: 2
    },
    {
      quantity: 25,
      produce_item_id: 6,
      order_id: 'supersecret12346',
      farm_id: 2,
      consumer_id: 3
    },
    {
      quantity: 25,
      produce_item_id: 7,
      order_id: 'supersecret1234',
      farm_id: 2,
      consumer_id: 1
    },
    {
      quantity: 25,
      produce_item_id: 8,
      order_id: 'supersecret1234',
      farm_id: 1,
      consumer_id: 1
    },
    {
      quantity: 25,
      produce_item_id: 9,
      order_id: 'supersecret1',
      farm_id: 1,
      consumer_id: 1
    },
    {
      quantity: 25,
      produce_item_id: 1,
      order_id: 'supersecret1',
      farm_id: 3,
      consumer_id: 1
    }
  ]);
};