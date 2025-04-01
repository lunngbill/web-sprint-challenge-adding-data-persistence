/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("projects", tbl => {
    tbl.increments('project_id')
    tbl.string('project_name').notNullable()
    tbl.text('project_description')
    tbl.boolean('project_completed').defaultTo(false)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('projects')
};
