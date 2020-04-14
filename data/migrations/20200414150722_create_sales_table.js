exports.up = function (knex) {
  return knex.schema.createTable("sales", (table) => {
    table.increments();
    table.integer("car_id");
    table.foreign("car_id").references("id").inTable("cars");
    table.string("customer").notNullable().index();
    table.integer("sale_price").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("sales");
};
