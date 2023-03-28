/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("roles").del();
  await knex("roles").insert([
    { id: 1, name: "user" },
    { id: 2, name: "admin" },
    { id: 3, name: "ohmygod" },
  ]);
};
