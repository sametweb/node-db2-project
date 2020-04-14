exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments();
    table.string("VIN", 17).notNullable().unique().index();
    table.string("make", 40).notNullable().index();
    table.string("model", 40).notNullable().index();
    table.integer("milage", 8).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cars");
};
