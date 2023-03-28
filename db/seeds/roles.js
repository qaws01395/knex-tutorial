/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("roles").del();
  await knex("roles").insert([
    { id: 1, colName: "user" },
    { id: 2, colName: "admin" },
    { id: 3, colName: "ohmygod" },
  ]);
};
