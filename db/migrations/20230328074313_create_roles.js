/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("roles", function (table) {
      table.increments("id");
      table.string("name", 255).notNullable();
    })
    .createTable("user_roles", function (table) {
      table.increments(),
        table.integer("user_id").notNullable,
        table.integer("role_id").notNullable;
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("roles").dropTableIfExists("user_roles");
};
