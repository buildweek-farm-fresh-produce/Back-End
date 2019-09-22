exports.up = function (knex) {
    return knex.schema
        .createTable('city', city => {
            city.increments();
            city.string('name').unique().notNullable();
        })
        .createTable('state', state => {
            state.increments();
            state.string('name').unique().notNullable();
        })
        .createTable('user_farmer', user => {
            user.increments();
            user.string('username', 128).notNullable().unique();
            user.string('email', 128).notNullable().unique();
            user.string('password', 128).notNullable();
        })
        .createTable('farm', farm => {
            farm.increments();
            farm.string('name', 128).notNullable();
            farm.string('address', 128);
            farm.integer('year_founded').notNullable();
            farm.text('bio');
            farm.integer('farmer_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('user_farmer')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            farm.integer('city_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('city')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            farm.integer('state_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('state')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('consumer_user', consumer => {
            consumer.increments();
            consumer.string('username', 128).unique().notNullable();
            consumer.string('email', 128).unique().notNullable();
            consumer.string('password', 128).notNullable();
            consumer.integer('city_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('city')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            consumer.integer('state_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('state')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('produce_category', category => {
            category.increments();
            category.string('name', 128);
        })
        .createTable('produce_item', item => {
            item.increments();
            item.string('name', 128).notNullable();
            item.integer('quantity').notNullable();
            item.float('price').notNullable();
            item.integer('category_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('produce_category')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            item.integer('farm_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('farm')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('order', order => {
            order.increments();
            order.string('shipping_address', 256).notNullable();
            order.date('purchase_date').notNullable();
            order.boolean('delivered').notNullable();
            order.integer('consumer_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('consumer_user')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('order_item', item => {
            item.increments();
            item.integer('quantity').notNullable();
            item.integer('produce_item_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('produce_item')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            item.integer('order_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('order')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            item.integer('farm_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('farm')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('tool_category', category => {
            category.increments();
            category.string('name', 128).unique().notNullable();
        })
        .createTable('tool', tool => {
            tool.increments();
            tool.string('name').unique().notNullable();
            tool.integer('tool_category_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('tool_category')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('farm_tool', farmTool => {
            farmTool.increments();
            farmTool.integer('quantity').notNullable();
            farmTool.integer('tool_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('tool')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            farmTool.integer('farm_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('farm')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('farm_upgrade', upgrade => {
            upgrade.increments()
            upgrade.string('name', 158).notNullable();
            upgrade.float('price');
            upgrade.boolean('purchased').notNullable();
            upgrade.blob('image');
            upgrade.binary('purchase_links');
            upgrade.integer('farm_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('farm')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        });
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('farm_upgrade')
    .dropTableIfExists('farm_tool')
    .dropTableIfExists('tool')
    .dropTableIfExists('tool_category')
    .dropTableIfExists('order_item')
    .dropTableIfExists('order')
    .dropTableIfExists('produce_item')
    .dropTableIfExists('produce_category')
    .dropTableIfExists('consumer_user')
    .dropTableIfExists('farm')
    .dropTableIfExists('user_farmer')
    .dropTableIfExists('state')
    .dropTableIfExists('city');
};