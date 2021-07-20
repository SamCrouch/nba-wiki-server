
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nba_teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('nba_teams').insert([
        {team_name: 'Celtics', city: 'Boston', arena: 'TD Garden', conference: 'Eastern', logo_url:"./Logo/celtics.png", coach: 'Ime Udoka', titles: '1957, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1968, 1969, 1974, 1976, 1981, 1984, 1986, 2008', roster: 'https://www.nba.com/celtics/roster'},
        {team_name: 'Nets', city: 'Brooklyn', arena: 'Barclays Center', conference: 'Eastern', logo_url: "./Logo/nets.png", coach: 'Steve Nash', titles: '1974(ABA), 1976(ABA)', roster: 'https://www.nba.com/nets/roster'},
        {team_name: 'Knicks', city: 'New York', arena: 'Madison Square Garden', conference: 'Eastern', logo_url: "./Logo/knicks.png", coach: 'Tom Thibodeau', titles: '1970, 1973', roster: 'https://www.nba.com/knicks/roster'},
        {team_name: '76ers', city: 'Philadelphia', arena: 'Wells Fargo Center', conference: 'Eastern', logo_url: "./Logo/sixers.png", coach: 'Doc Rivers', titles: '1955, 1967, 1983', roster: 'https://www.nba.com/sixers/roster'},
        {team_name: 'Raptors', city: 'Toronto', arena: 'Scotiabank Arena', conference: 'Eastern', logo_url: "./Logo/raptors.png", coach: 'Nick Nurse', titles: '2019', roster: 'https://www.nba.com/raptors/roster'},
        {team_name: 'Bulls', city: 'Chicago', arena: 'United Center', conference: 'Eastern', logo_url: "./Logo/bulls.png", coach: 'Billy Donovan', titles: '1991, 1992, 1993, 1996, 1997, 1998', roster: 'https://www.nba.com/bulls/roster'},
        {team_name: 'Cavaliers', city: 'Cleveland', arena: 'Rocket Mortgage Fieldhouse', conference: 'Eastern', logo_url: "./Logo/cavaliers.png", coach: 'JB Bickerstaff', titles: '2016', roster: 'https://www.nba.com/cavaliers/roster'},
        {team_name: 'Pistons', city: 'Detroit', arena: 'Little Caesars Arena', conference: 'Eastern', logo_url: "./Logo/pistons.png", coach: 'Dwane Casey', titles: '1989, 1990, 2004', roster: 'https://www.nba.com/pistons/roster'},
        {team_name: 'Pacers', city: 'Indiana', arena: 'Bankers Life Fieldhouse', conference: 'Eastern', logo_url: "./Logo/pacers.png", coach: 'Rick Carlisle', titles: '1970(ABA), 1972(ABA), 1973(ABA)', roster: 'https://www.nba.com/pacers/roster'},
        {team_name: 'Bucks', city: 'Milwaukee', arena: 'Fiserv Forum', conference: 'Eastern', logo_url: "./Logo/bucks.png", coach: 'Mike Budenholzer', titles: '1971', roster: 'https://www.nba.com/bucks/roster'},
        {team_name: 'Hawks', city: 'Atlanta', arena: 'State Farm Arena', conference: 'Eastern', logo_url: "./Logo/hawks.png", coach: 'Nate McMillan', titles: '1958', roster: 'https://www.nba.com/hawks/roster'},
        {team_name: 'Hornets', city: 'Charlotte', arena: 'Spectrum', conference: 'Eastern', logo_url: "./Logo/hornets.png", coach: 'James Borrego', titles: 'None', roster: 'https://www.nba.com/hornets/roster'},
        {team_name: 'Heat', city: 'Miami', arena: 'FTX Arena', conference: 'Eastern', logo_url: "./Logo/heat.png", coach: 'Erik Spoelstra', titles: '2006, 2012, 2013', roster: 'https://www.nba.com/heat/roster'},
        {team_name: 'Magic', city: 'Orlando', arena: 'Amway Center', conference: 'Eastern', logo_url: "./Logo/magic.png", coach: 'Jamahl Mosley', titles: 'None', roster: 'https://www.nba.com/magic/roster'},
        {team_name: 'Wizards', city: 'Washington', arena: 'Capital One Arena', conference: 'Eastern', logo_url: "./Logo/wizards.png", coach: 'Wes Unseld Jr', titles: '1978', roster: 'https://www.nba.com/wizards/roster'},

        {team_name: 'Spurs', city: 'San Antonio', arena: 'AT&T Center', conference: 'Western', logo_url: "./Logo/spurs.png", coach: 'Gregg Popovich', titles: '1999, 2003, 2005, 2006, 2014', roster: 'https://www.nba.com/spurs/roster'},
        {team_name: 'Pelicans', city: 'New Orleans', arena: 'Smoothie King Center', conference: 'Western', logo_url: "./Logo/pelicans.png", coach: 'Stan Van Gundy', titles: 'None', roster: 'https://www.nba.com/pelicans/roster'},
        {team_name: 'Grizzles', city: 'Memphis', arena: 'FedExForum', conference: 'Western', logo_url: "./Logo/grizzlies.png", coach: 'Taylor Jenkins', titles: 'None', roster: 'https://www.nba.com/grizzlies/roster'},
        {team_name: 'Rockets', city: 'Houston', arena: 'Toyota Center', conference: 'Western', logo_url: "./Logo/rockets.png", coach: 'Stephen Silas', titles: '1994, 1995', roster: 'https://www.nba.com/rockets/roster'},
        {team_name: 'Mavericks', city: 'Dallas', arena: 'American Airlines Center', conference: 'Western', logo_url: "./Logo/mavericks.png", coach: 'Jason Kidd', titles: '2011', roster: 'https://www.nba.com/mavericks/roster'},
        {team_name: 'Kings', city: 'Sacramento', arena: 'Golden 1 Center', conference: 'Western', logo_url: "./Logo/kings.png", coach: 'Luke Walton', titles: '1951', roster: 'https://www.nba.com/kings/roster'},
        {team_name: 'Suns', city: 'Phoenix', arena: 'Phoenix Suns Arena', conference: 'Western', logo_url: "./Logo/suns.png", coach: 'Monty Williams', titles: 'None', roster: 'https://www.nba.com/suns/roster'},
        {team_name: 'Lakers', city: 'Los Angeles', arena: 'Staples Center', conference: 'Western', logo_url: "./Logo/lakers.png", coach: 'Frank Vogel', titles: '1949, 1950, 1952, 1953, 1954, 1972, 1980, 1982, 1985, 1987, 1988, 2000, 2001, 2002, 2009, 2010, 2020*', roster: 'https://www.nba.com/lakers/roster'},
        {team_name: 'Clippers', city: 'Los Angeles', arena: 'Staples Center', conference: 'Western', logo_url: "./Logo/clippers.png", coach: 'Tyronn Lue', titles: 'None', roster: 'https://www.nba.com/clippers/roster'},
        {team_name: 'Warriors', city: 'Golden State', arena: 'Chase Center', conference: 'Western', logo_url: "./Logo/warriors.png", coach: 'Steve Kerr', titles: '1947, 1956, 1975, 2015, 2017, 2018', roster: 'https://www.nba.com/warriors/roster'},
        {team_name: 'Jazz', city: 'Utah', arena: 'Vivint Arena', conference: 'Western', logo_url: "./Logo/jazz.png", coach: 'Quin Snyder', titles: 'None', roster: 'https://www.nba.com/jazz/roster'},
        {team_name: 'Trail Blazers', city: 'Portland', arena: 'Moda Center', conference: 'Western', logo_url: "./Logo/blazers.png", coach: 'Chauncey Billups', titles: '1977', roster: 'https://www.nba.com/blazers/roster'},
        {team_name: 'Thunder', city: 'Oklahoma City', arena: 'Chesapeake Energy Arena', conference: 'Western', logo_url: "./Logo/thunder.png", coach: 'Mark Daigneault', titles: '1979', roster: 'https://www.nba.com/thunder/roster'},
        {team_name: 'Timberwolves', city: 'Minnesota', arena: 'Target Center', conference: 'Western', logo_url: "./Logo/timberwolves.png", coach: 'Chris Finch', titles: 'None', roster: 'https://www.nba.com/timberwolves/roster'},
        {team_name: 'Nuggets', city: 'Denver', arena: 'Ball Arena', conference: 'Western', logo_url: "./Logo/nuggets.png", coach: 'Michael Maone', titles: 'None', roster: 'https://www.nba.com/nuggets/roster'},
      ]);
    });
};
