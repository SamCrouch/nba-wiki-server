
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

        {team_name: 'Spurs', city: 'San Antonio', arena: 'AT&T Center', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/233/full/2547_san_antonio_spurs-primary-2018.png"},
        {team_name: 'Pelicans', city: 'New Orleans', arena: 'Smoothie King Center', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/4962/full/2681_new_orleans_pelicans-primary-2014.png"},
        {team_name: 'Grizzles', city: 'Memphis', arena: 'FedExForum', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/231/full/4373_memphis_grizzlies-primary-2019.png"},
        {team_name: 'Rockets', city: 'Houston', arena: 'Toyota Center', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/230/full/6830_houston_rockets-primary-2020.png"},
        {team_name: 'Mavericks', city: 'Dallas', arena: 'American Airlines Center', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/228/full/3463_dallas_mavericks-primary-2018.png"},
        {team_name: 'Kings', city: 'Sacramento', arena: 'Golden 1 Center', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/240/full/4043_sacramento_kings-primary-2017.png"},
        {team_name: 'Suns', city: 'Phoenix', arena: 'Phoenix Suns Arena', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/238/full/phoenix_suns_logo_primary_20143696.png"},
        {team_name: 'Lakers', city: 'Los Angeles', arena: 'Staples Center', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/237/full/uig7aiht8jnpl1szbi57zzlsh.png"},
        {team_name: 'Clippers', city: 'Los Angeles', arena: 'Staples Center', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/236/full/los_angeles_clippers_logo_primary_2019_sportslogosnet-3776.png"},
        {team_name: 'Warriors', city: 'Golden State', arena: 'Chase Center', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/235/full/3152_golden_state_warriors-primary-2020.png"},
        {team_name: 'Jazz', city: 'Utah', arena: 'Vivint Arena', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/234/full/6749_utah_jazz-primary-2017.png"},
        {team_name: 'Trail Blazers', city: 'Portland', arena: 'Moda Center', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/239/full/9725_portland_trail_blazers-primary-2018.png"},
        {team_name: 'Thunder', city: 'Oklahoma City', arena: 'Chesapeake Energy Arena', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/2687/full/khmovcnezy06c3nm05ccn0oj2.png"},
        {team_name: 'Timberwolves', city: 'Minnesota', arena: 'Target Center', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/232/full/9669_minnesota_timberwolves-primary-2018.png"},
        {team_name: 'Nuggets', city: 'Denver', arena: 'Ball Arena', conference: 'Western', logo_url: "https://content.sportslogos.net/logos/6/229/full/8926_denver_nuggets-primary-2019.png"},
      ]);
    });
};
