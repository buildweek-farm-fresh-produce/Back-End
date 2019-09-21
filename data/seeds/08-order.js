
exports.seed = function(knex) {
      return knex('order').insert([
        {shipping_address: '123 Main St.', purchase_date: '2019-08-06', delivered: 0, consumer_id: 1},
        {shipping_address: '223 Beach St.', purchase_date: '2019-03-04', delivered: 0, consumer_id: 2},
        {shipping_address: '323 Main St.', purchase_date: '2018-12-12', delivered: 0, consumer_id: 3},
        {shipping_address: '123 Creek St.', purchase_date: '2017-05-12', delivered: 0, consumer_id: 1},
        {shipping_address: '223 River Rd.', purchase_date: '2018-07-04', delivered: 0, consumer_id: 2},
        {shipping_address: '323 Main St.', purchase_date: '2019-08-03', delivered: 0, consumer_id: 3}
      ]);
};
