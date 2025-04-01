/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('project_resources', tbl => {
    tbl.increments('id')

    tbl 
        .integer('project_id')
        .unsigned()
        .notNullable()
       .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

     tbl 
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('CASCADE')            
        .onUpdate('CASCADE')

    tbl.unique(['project_id', 'resource_id'])
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_resources')
};
