/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("tasks", tbl => {
        tbl.increments('task_id')
        tbl.string('task_description').notNullable()
        tbl.string('task_notes')
        tbl.boolean('task_completed').defaultTo(false)

        tbl 
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('tasks')
};
