exports.seed = function (knex) {
  return knex('tool').insert([{
      name: 'Harvester',
      tool_category_id: 1
    },
    {
      name: 'Tree Shaker',
      tool_category_id: 1
    },
    {
      name: 'Tiller',
      tool_category_id: 1
    },
    {
      name: 'Shovel',
      tool_category_id: 2
    },
    {
      name: 'Hammer',
      tool_category_id: 2
    },
    {
      name: 'Axe',
      tool_category_id: 2
    },
    {
      name: 'Water Flow Meter',
      tool_category_id: 3
    },
    {
      name: 'Soil Sensor',
      tool_category_id: 3
    },
    {
      name: 'Sprinkler',
      tool_category_id: 3
    },
  ]);
};