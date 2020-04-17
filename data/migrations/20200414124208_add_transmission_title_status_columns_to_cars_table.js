exports.up = function (knex) {
  return knex.schema.table("cars", (table) => {
    table.string("transmission");
    table.string("title_status");
  });
};

exports.down = function (knex) {
  return knex.schema.table("cars", (table) => {
    table.dropColumn("transmission");
    table.dropColumn("title_status");
  });
};
