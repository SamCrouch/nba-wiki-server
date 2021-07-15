
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nba_teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('nba_teams').insert([
        {team_name: 'Celtics', city: 'Boston', arena: 'TD Garden', conference: 'Eastern'},
        {team_name: 'Nets', city: 'Brooklyn', arena: 'Barclays Center', conference: 'Eastern'},
        {team_name: 'Knicks', city: 'New York', arena: 'Madison Square Garden', conference: 'Eastern'},
        {team_name: '76ers', city: 'Philadelphia', arena: 'Wells Fargo Center', conference: 'Eastern'},
        {team_name: 'Raptors', city: 'Toronto', arena: 'Scotiabank Arena', conference: 'Eastern'},
        {team_name: 'Bulls', city: 'Chicago', arena: 'United Center', conference: 'Eastern'},
        {team_name: 'Cavaliers', city: 'Cleveland', arena: 'Rocket Mortgage Fieldhouse', conference: 'Eastern'},
        {team_name: 'Pistons', city: 'Detroit', arena: 'Little Caesars Arena', conference: 'Eastern'},
        {team_name: 'Pacers', city: 'Indiana', arena: 'Bankers Life Fieldhouse', conference: 'Eastern'},
        {team_name: 'Bucks', city: 'Milwaukee', arena: 'Fiserv Forum', conference: 'Eastern'},
        {team_name: 'Hawks', city: 'Atlanta', arena: 'State Farm Arena', conference: 'Eastern'},
        {team_name: 'Hornets', city: 'Charlotte', arena: 'Spectrum', conference: 'Eastern'},
        {team_name: 'Heat', city: 'Miami', arena: 'FTX Arena', conference: 'Eastern'},
        {team_name: 'Magic', city: 'Orlando', arena: 'Amway Center', conference: 'Eastern'},
        {team_name: 'Wizards', city: 'Washington', arena: 'Capital One Arena', conference: 'Eastern'},

        {team_name: 'Spurs', city: 'San Antonio', arena: 'AT&T Center', conference: 'Western'},
        {team_name: 'Pelicans', city: 'New Orleans', arena: 'Smoothie King Center', conference: 'Western'},
        {team_name: 'Grizzles', city: 'Memphis', arena: 'FedExForum', conference: 'Western'},
        {team_name: 'Rockets', city: 'Houston', arena: 'Toyota Center', conference: 'Western'},
        {team_name: 'Mavericks', city: 'Dallas', arena: 'American Airlines Center', conference: 'Western'},
        {team_name: 'Kings', city: 'Sacramento', arena: 'Golden 1 Center', conference: 'Western'},
        {team_name: 'Suns', city: 'Phoenix', arena: 'Phoenix Suns Arena', conference: 'Western'},
        {team_name: 'Lakers', city: 'Los Angeles', arena: 'Staples Center', conference: 'Western'},
        {team_name: 'Clippers', city: 'Los Angeles', arena: 'Staples Center', conference: 'Western'},
        {team_name: 'Warriors', city: 'Golden State', arena: 'Chase Center', conference: 'Western'},
        {team_name: 'Jazz', city: 'Utah', arena: 'Vivint Arena', conference: 'Western'},
        {team_name: 'Trail Blazers', city: 'Portland', arena: 'Moda Center', conference: 'Western'},
        {team_name: 'Thunder', city: 'Oklahoma City', arena: 'Chesapeake Energy Arena', conference: 'Western'},
        {team_name: 'Timberwolves', city: 'Minnesota', arena: 'Target Center', conference: 'Western'},
        {team_name: 'Nuggets', city: 'Denver', arena: 'Ball Arena', conference: 'Western'},
      ]);
    });
};
