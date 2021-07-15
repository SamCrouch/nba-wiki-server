
exports.up = function(knex) {
  return knex.SVGPathSegCurvetoCubicSmoothAbs.createTable('nba_teams', table => {
    table.increments('id');
    table.string('team_name').notNullable();
    table.string('city').notNullable();
    table.string('arena').notNullable();
    table.string('conference').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('nba_teams')
};
