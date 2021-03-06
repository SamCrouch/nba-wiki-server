
exports.up = function(knex) {
  return knex.schema.createTable('nba_teams', table => {
    table.increments('id');
    table.string('team_name').notNullable();
    table.string('city').notNullable();
    table.string('arena').notNullable();
    table.string('conference').notNullable();
    table.string('logo_url').notNullable();
    table.string('coach').notNullable();
    table.string('roster').notNullable();
    table.string('titles').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('nba_teams')
};
