
exports.seed = function(knex) {
      return knex('farm_tool').insert([
        {quantity: 100, tool_id: 1,farm_id: 1},
        {quantity: 200, tool_id: 2,farm_id: 1},
        {quantity: 30, tool_id: 3,farm_id: 1},
        {quantity: 50, tool_id: 4,farm_id: 1},
        {quantity: 20, tool_id: 5,farm_id: 1},
        {quantity: 250, tool_id: 6,farm_id: 1},
        {quantity: 170, tool_id: 1,farm_id: 2 },
        {quantity: 270, tool_id: 2,farm_id: 2 },
        {quantity: 70, tool_id: 3,farm_id: 2 },
        {quantity: 70, tool_id: 4,farm_id: 2 },
        {quantity: 70, tool_id: 5,farm_id: 2 },
        {quantity: 270, tool_id: 6,farm_id: 2 },
        {quantity: 10, tool_id: 1,farm_id: 3 },
        {quantity: 20, tool_id: 2,farm_id: 3 },
        {quantity: 7, tool_id: 3,farm_id: 3 },
        {quantity: 7, tool_id: 4,farm_id: 3 },
        {quantity: 7, tool_id: 5,farm_id: 3 },
        {quantity: 43, tool_id: 6,farm_id: 3 },
        
      ]);
};
