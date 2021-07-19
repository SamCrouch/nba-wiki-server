
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nba_teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('nba_teams').insert([
        {team_name: 'Celtics', city: 'Boston', arena: 'TD Garden', conference: 'Eastern', logo_url:"https://content.sportslogos.net/logos/6/213/full/boston_celtics_logo_primary_19977628.png"},
        {team_name: 'Nets', city: 'Brooklyn', arena: 'Barclays Center', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/3786/full/137_brooklyn-nets-primary-2013.png"},
        {team_name: 'Knicks', city: 'New York', arena: 'Madison Square Garden', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/216/full/2nn48xofg0hms8k326cqdmuis.gif"},
        {team_name: '76ers', city: 'Philadelphia', arena: 'Wells Fargo Center', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/218/full/7034_philadelphia_76ers-primary-2016.png"},
        {team_name: 'Raptors', city: 'Toronto', arena: 'Scotiabank Arena', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/227/full/7024_toronto_raptors-primary-2021.png"},
        {team_name: 'Bulls', city: 'Chicago', arena: 'United Center', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/221/full/chicago_bulls_logo_primary_19672598.png"},
        {team_name: 'Cavaliers', city: 'Cleveland', arena: 'Rocket Mortgage Fieldhouse', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/222/full/cleveland_cavaliers_logo_primary_20187997.png"},
        {team_name: 'Pistons', city: 'Detroit', arena: 'Little Caesars Arena', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/223/full/2164_detroit_pistons-primary-2018.png"},
        {team_name: 'Pacers', city: 'Indiana', arena: 'Bankers Life Fieldhouse', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/224/full/4812_indiana_pacers-primary-2018.png"},
        {team_name: 'Bucks', city: 'Milwaukee', arena: 'Fiserv Forum', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/225/full/milwaukee_bucks_logo_primary_20165763.png"},
        {team_name: 'Hawks', city: 'Atlanta', arena: 'State Farm Arena', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/220/full/8190_atlanta_hawks-primary-2021.png"},
        {team_name: 'Hornets', city: 'Charlotte', arena: 'Spectrum', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/5120/full/1926_charlotte__hornets_-primary-2015.png"},
        {team_name: 'Heat', city: 'Miami', arena: 'FTX Arena', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/214/full/burm5gh2wvjti3xhei5h16k8e.gif"},
        {team_name: 'Magic', city: 'Orlando', arena: 'Amway Center', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/217/full/orlando_magic_logo_primary_20117178.png"},
        {team_name: 'Wizards', city: 'Washington', arena: 'Capital One Arena', conference: 'Eastern', logo_url: "https://content.sportslogos.net/logos/6/219/full/5671_washington_wizards-primary-2016.png"},

        {team_name: 'Spurs', city: 'San Antonio', arena: 'AT&T Center', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/2560px-San_Antonio_Spurs.svg.png"},
        {team_name: 'Pelicans', city: 'New Orleans', arena: 'Smoothie King Center', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/1920px-New_Orleans_Pelicans_logo.svg.png"},
        {team_name: 'Grizzles', city: 'Memphis', arena: 'FedExForum', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png"},
        {team_name: 'Rockets', city: 'Houston', arena: 'Toyota Center', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1024px-Houston_Rockets.svg.png"},
        {team_name: 'Mavericks', city: 'Dallas', arena: 'American Airlines Center', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1280px-Dallas_Mavericks_logo.svg.png"},
        {team_name: 'Kings', city: 'Sacramento', arena: 'Golden 1 Center', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/1280px-SacramentoKings.svg.png"},
        {team_name: 'Suns', city: 'Phoenix', arena: 'Phoenix Suns Arena', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/1280px-Phoenix_Suns_logo.svg.png"},
        {team_name: 'Lakers', city: 'Los Angeles', arena: 'Staples Center', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/2560px-Los_Angeles_Lakers_logo.svg.png"},
        {team_name: 'Clippers', city: 'Los Angeles', arena: 'Staples Center', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Los_Angeles_Clippers_%282015%29.svg/1920px-Los_Angeles_Clippers_%282015%29.svg.png"},
        {team_name: 'Warriors', city: 'Golden State', arena: 'Chase Center', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1280px-Golden_State_Warriors_logo.svg.png"},
        {team_name: 'Jazz', city: 'Utah', arena: 'Vivint Arena', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utah_Jazz_logo_%282016%29.svg/2560px-Utah_Jazz_logo_%282016%29.svg.png"},
        {team_name: 'Trail Blazers', city: 'Portland', arena: 'Moda Center', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1920px-Portland_Trail_Blazers_logo.svg.png"},
        {team_name: 'Thunder', city: 'Oklahoma City', arena: 'Chesapeake Energy Arena', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/1920px-Oklahoma_City_Thunder.svg.png"},
        {team_name: 'Timberwolves', city: 'Minnesota', arena: 'Target Center', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/1280px-Minnesota_Timberwolves_logo.svg.png"},
        {team_name: 'Nuggets', city: 'Denver', arena: 'Ball Arena', conference: 'Western', logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/1280px-Denver_Nuggets.svg.png"},
      ]);
    });
};
