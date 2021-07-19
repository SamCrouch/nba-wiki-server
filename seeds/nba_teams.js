
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nba_teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('nba_teams').insert([
        {team_name: 'Celtics', city: 'Boston', arena: 'TD Garden', conference: 'Eastern', logo_url:"http://assets.stickpng.com/thumbs/58419c6aa6515b1e0ad75a61.png"},
        {team_name: 'Nets', city: 'Brooklyn', arena: 'Barclays Center', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419c7ba6515b1e0ad75a62.png"},
        {team_name: 'Knicks', city: 'New York', arena: 'Madison Square Garden', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419cc8a6515b1e0ad75a67.png"},
        {team_name: '76ers', city: 'Philadelphia', arena: 'Wells Fargo Center', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419ca3a6515b1e0ad75a64.png"},
        {team_name: 'Raptors', city: 'Toronto', arena: 'Scotiabank Arena', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419bf3a6515b1e0ad75a59.png"},
        {team_name: 'Bulls', city: 'Chicago', arena: 'United Center', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419cf6a6515b1e0ad75a6b.png"},
        {team_name: 'Cavaliers', city: 'Cleveland', arena: 'Rocket Mortgage Fieldhouse', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419c8da6515b1e0ad75a63.png"},
        {team_name: 'Pistons', city: 'Detroit', arena: 'Little Caesars Arena', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419c4ca6515b1e0ad75a5f.png"},
        {team_name: 'Pacers', city: 'Indiana', arena: 'Bankers Life Fieldhouse', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419b8da6515b1e0ad75a52.png"},
        {team_name: 'Bucks', city: 'Milwaukee', arena: 'Fiserv Forum', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419ba7a6515b1e0ad75a54.png"},
        {team_name: 'Hawks', city: 'Atlanta', arena: 'State Farm Arena', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419be4a6515b1e0ad75a58.png"},
        {team_name: 'Hornets', city: 'Charlotte', arena: 'Spectrum', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419bd7a6515b1e0ad75a57.png"},
        {team_name: 'Heat', city: 'Miami', arena: 'FTX Arena', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419cafa6515b1e0ad75a65.png"},
        {team_name: 'Magic', city: 'Orlando', arena: 'Amway Center', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419b7da6515b1e0ad75a51.png"},
        {team_name: 'Wizards', city: 'Washington', arena: 'Capital One Arena', conference: 'Eastern', logo_url: "http://assets.stickpng.com/thumbs/58419c12a6515b1e0ad75a5b.png"},

        {team_name: 'Spurs', city: 'San Antonio', arena: 'AT&T Center', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419cbca6515b1e0ad75a66.png"},
        {team_name: 'Pelicans', city: 'New Orleans', arena: 'Smoothie King Center', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419b9ba6515b1e0ad75a53.png"},
        {team_name: 'Grizzles', city: 'Memphis', arena: 'FedExForum', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419c00a6515b1e0ad75a5a.png"},
        {team_name: 'Rockets', city: 'Houston', arena: 'Toyota Center', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419ceda6515b1e0ad75a6a.png"},
        {team_name: 'Mavericks', city: 'Dallas', arena: 'American Airlines Center', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419cd6a6515b1e0ad75a68.png"},
        {team_name: 'Kings', city: 'Sacramento', arena: 'Golden 1 Center', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419c3da6515b1e0ad75a5e.png"},
        {team_name: 'Suns', city: 'Phoenix', arena: 'Phoenix Suns Arena', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419d52a6515b1e0ad75a6d.png"},
        {team_name: 'Lakers', city: 'Los Angeles', arena: 'Staples Center', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419d0aa6515b1e0ad75a6c.png"},
        {team_name: 'Clippers', city: 'Los Angeles', arena: 'Staples Center', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419c59a6515b1e0ad75a60.png"},
        {team_name: 'Warriors', city: 'Golden State', arena: 'Chase Center', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419ce2a6515b1e0ad75a69.png"},
        {team_name: 'Jazz', city: 'Utah', arena: 'Vivint Arena', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419bb6a6515b1e0ad75a55.png"},
        {team_name: 'Trail Blazers', city: 'Portland', arena: 'Moda Center', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419c2fa6515b1e0ad75a5d.png"},
        {team_name: 'Thunder', city: 'Oklahoma City', arena: 'Chesapeake Energy Arena', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419c20a6515b1e0ad75a5c.png"},
        {team_name: 'Timberwolves', city: 'Minnesota', arena: 'Target Center', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419bc5a6515b1e0ad75a56.png"},
        {team_name: 'Nuggets', city: 'Denver', arena: 'Ball Arena', conference: 'Western', logo_url: "http://assets.stickpng.com/thumbs/58419b70a6515b1e0ad75a50.png"},
      ]);
    });
};
