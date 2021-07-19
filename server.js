const express = require('express');
const knex = require('knex')(require('./knexfile.js')['development']);
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(express.json())
app.use(cors());

app.get('/', function(req, res) {
    knex.select('*')
        .from('nba_teams')
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message: 'The NBA has disbanded'
            }))
})

app.post('/:teamName', function(req, res) {
    knex('nba_teams')
    .where({team_name: teamName})
    .insert({
        team_name: req.body.team_name,
        city: req.body.city,
        arena: req.body.arena,
        conference: req.body.conference,
        logo_url: req.body.logo_url,
        coach: req.body.coach,
        roster: req.body.roster,
        titles: req.body.titles
    })
})

app.listen(port, () => console.log(`app listening at nba-wiki-sam.herokuapp.com`))